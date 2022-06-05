import { query } from "./query.js";

export const hide_option_handler = function (callback) {
  query.selected.addEventListener("click", callback);
};

export const region_selection_handler = function (callback) {
  query.optionsContainer.addEventListener("click", callback);
};
