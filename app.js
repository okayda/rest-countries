import * as config from "./config.js";
import { state } from "./state.js";
import { query } from "./query.js";
import { renderCard } from "./markup.js";

const load_country = async function (region) {
  try {
    const response = await fetch(
      config.SELECT_REGION_API(region.toLowerCase())
    );

    state.countries = await response.json();

    state.countries.forEach((countryData) => {
      query.countriesContainer.insertAdjacentHTML(
        "beforeend",
        renderCard(countryData)
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

const selected_country_data = async function (name) {
  try {
    const response = await fetch(config.COUNTRY_NAME_API(name));
    const [data] = await response.json();
    query.countriesContainer.innerHTML = "";
  } catch (err) {
    console.log(err);
  }
};

const country_search = function () {
  const inputValue = this.value.toUpperCase();

  for (let i = 0; i < state.gridItems.length; i++) {
    const text = state.gridItems[i].querySelector(".title");
    const txtValue = text.textContent || text.innerText;
    if (txtValue.toUpperCase().indexOf(inputValue) > -1)
      state.gridItems[i].style.display = "";
    else state.gridItems[i].style.display = "none";
  }
};

load_country("Asia");
query.selected.addEventListener("click", hide_options);
query.optionsContainer.addEventListener("click", selection_region);
query.countriesContainer.addEventListener("click", (e) => {
  const targetCountry = e.target.closest(".grid-item");
  if (!targetCountry) return;

  const country = targetCountry.querySelector(".title").textContent;
  selected_country_data(country);
});

query.searchInput.addEventListener("keyup", country_search);
