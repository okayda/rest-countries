import { query } from "./query.js";

export const theme = (callback) =>
  query.themeBtn.addEventListener("click", callback);

export const selected = (callback) =>
  query.selected.addEventListener("click", callback);

export const selectRegion = (callback) =>
  query.optionsContainer.addEventListener("click", callback);

export const selectCountries = (callback) =>
  query.gridContainer.addEventListener("click", callback);

export const searchCountries = (callback) =>
  query.searchInput.addEventListener("keyup", callback);

export const backCountries = (callback) =>
  query.backBtn.addEventListener("click", callback);
