import { state } from "./state.js";

export const dark_mode_countries = function () {
  state.gridItems.forEach((el) => {
    el.classList.toggle("dark-mode-child");
  });
};

export const dark_mode_borders = function () {
  if (state.isDarkMode && state.isInsideCountry)
    document
      .querySelectorAll(".neighbors p")
      .forEach((el) => el.classList.toggle("dark-mode-child"));
};

export const theme_mode = function () {
  state.isDarkMode = !state.isDarkMode ? true : false;

  document.querySelector("body").classList.toggle("dark-mode-parent");
  document.querySelector("body").style.color = state.isDarkMode
    ? "var(--very-light-gray)"
    : "var(--light-mode-text)";

  document.querySelector("header").classList.toggle("dark-mode-child");
  document.querySelector(".selected").classList.toggle("dark-mode-child");

  document.querySelector(".search-box").classList.toggle("dark-mode-child");
  document.querySelector(".search-input").classList.toggle("dark-mode-child");

  document.querySelector(".back-btn").classList.toggle("dark-mode-child");

  if (state.isInsideCountry)
    document
      .querySelectorAll(".neighbors p")
      .forEach((el) => el.classList.toggle("dark-mode-child"));

  document
    .querySelector(".options-container")
    .classList.toggle("dark-mode-child");

  dark_mode_countries();
};
