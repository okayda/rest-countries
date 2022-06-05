import * as config from "./config.js";
import * as handler from "./handlers.js";
import { renderCard } from "./markup.js";
import { state } from "./state.js";
import { query } from "./query.js";

const countryContainer = document.querySelector(".grid-container");

const load_country = async function (region) {
  try {
    const response = await fetch(
      config.SELECT_REGION_API(region.toLowerCase())
    );

    state.countries = await response.json();

    state.countries.forEach((countryData) => {
      countryContainer.insertAdjacentHTML(
        "beforeend",
        renderCard(countryData, 1)
      );
    });

    state.gridItems = document.querySelectorAll(".grid-item");
  } catch (err) {
    throw err;
  }
};

const hide_options = function () {
  query.optionsContainer.classList.toggle("active");
};

const selection_region = function (e) {
  const target = e.target;
  const targetLabel = target.querySelector("label");

  const region = (targetLabel ?? target).textContent;
  query.selected.textContent = region;

  state.gridItems.forEach((country) => country.remove());
  load_country(region);
};

const selection_country = function () {
  const specificCountry = async function (name) {
    const response = await fetch(config.COUNTRY_NAME_API(name));
    const data = await response.json();
    console.log(data);
  };

  countryContainer.addEventListener("click", function (e) {
    const targetCountry = e.target
      .closest(".grid-item")
      .querySelector(".title").textContent;

    specificCountry(targetCountry);
  });
};

const init = function () {
  load_country("Asia");
  handler.hide_option_handler(hide_options);
  handler.region_selection_handler(selection_region);
  handler.country_selection_handler();
};

init();
