import { state } from "./state.js";
import { query } from "./query.js";
import { theme_mode, dark_mode_borders, dark_mode_countries } from "./theme.js";
import * as markup from "./markup.js";
import * as handler from "./handlers.js";
import * as config from "./config.js";

const load_countries = async function (region) {
  try {
    const API =
      region === "all"
        ? config.ALL_REGION_API
        : config.SELECT_REGION_API(region);

    const response = await fetch(API);
    state.countries = await response.json();
    state.countries.forEach((countryData) => {
      query.gridContainer.insertAdjacentHTML(
        "beforeend",
        markup.renderCard(countryData)
      );
    });

    state.gridItems = document.querySelectorAll(".grid-item");

    if (state.isDarkMode) dark_mode_countries();
    markup.clearSpinner();
  } catch (err) {
    console.log(err);
  }
};

const alter_display_option = function () {
  query.optionsContainer.classList.toggle("active");
  query.arrowUp.classList.toggle("active");
};

const select_region = function (e) {
  const target = e.target;
  if (state.currentRegion === target.dataset.region) return;
  markup.renderSpinner("body");

  document.querySelector(`.${state.currentRegion}`).classList.remove("active");
  document.querySelector(`.${target.dataset.region}`).classList.add("active");

  state.currentRegion = target.dataset.region;
  state.gridItems.forEach((country) => country.remove());
  load_countries(target.dataset.region);
};

const borders_data = async function (borders) {
  if (!borders) return ["No border countries"];

  return await Promise.all(
    borders.map(async (el) => {
      console.log(el);
      const response = await fetch(config.COUNTRY_CODE_API(el));
      const [data] = await response.json();
      return data.name.common;
    })
  );
};

const generate_country_data = async function (Countryname) {
  try {
    const response = await fetch(config.COUNTRY_NAME_API(Countryname));
    const [data] = await response.json();
    const borders = await borders_data(data.borders);

    query.gridContainer.classList.add("deactive");
    query.parentDetailsContainer.classList.add("active");
    query.detailsContainer.insertAdjacentHTML(
      "beforeend",
      markup.renderCountry(data, borders)
    );

    state.isInsideCountry = true;
    dark_mode_borders();
  } catch (err) {
    console.log(err);
  }
};

const selected_country = function (e) {
  const targetCountry = e.target.closest(".grid-item");
  if (!targetCountry) return;

  const country = targetCountry.querySelector(query.gridItemTitle).textContent;
  generate_country_data(country);
};

const search_country = function () {
  const inputValue = this.value.toLowerCase();

  state.gridItems.forEach((el) => {
    const text = el
      .querySelector(query.gridItemTitle)
      .textContent.toLowerCase();
    el.style.display = !(text.indexOf(inputValue) > -1) ? "none" : "";
  });
};

const remove_attributes = function () {
  document.querySelector(query.flagContainer).remove();
  document.querySelector(query.details).remove();
  query.gridContainer.classList.remove("deactive");
  query.parentDetailsContainer.classList.remove("active");

  state.isInsideCountry = false;
};

const init_handlers = function () {
  handler.theme(theme_mode);
  handler.selected(alter_display_option);
  handler.selectRegion(select_region);
  handler.selectCountries(selected_country);
  handler.searchCountries(search_country);
  handler.backCountries(remove_attributes);
};

markup.renderSpinner("body");
load_countries(state.currentRegion);
init_handlers();
