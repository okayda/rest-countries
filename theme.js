import { state } from "./state.js";
import { query } from "./query.js";

export const dark_mode_countries = function () {
  state.gridItems.forEach((el) => {
    el.classList.toggle(query.secondaryDark);
  });
};

export const dark_mode_borders = function () {
  if (state.isDarkMode && state.isInsideCountry)
    document
      .querySelectorAll(query.neighbor)
      .forEach((el) => el.classList.toggle(query.secondaryDark));
};

export const theme_mode = function () {
  state.isDarkMode = !state.isDarkMode ? true : false;

  document.querySelector("body").classList.toggle(query.mainDark);
  document.querySelector("body").style.color = state.isDarkMode
    ? query.lightGrayText
    : query.lightBlackText;

  query.header.classList.toggle(query.secondaryDark);
  query.selected.classList.toggle(query.secondaryDark);

  query.searchBox.classList.toggle(query.secondaryDark);
  query.searchInput.classList.toggle(query.secondaryDark);

  query.backBtn.classList.toggle(query.secondaryDark);

  if (state.isInsideCountry)
    document
      .querySelectorAll(query.neighbor)
      .forEach((el) => el.classList.toggle(query.secondaryDark));

  query.optionsContainer.classList.toggle(query.secondaryDark);

  dark_mode_countries();
};
