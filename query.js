export const query = {
  mainDark: "dark-mode-parent",
  secondaryDark: "dark-mode-child",

  lightBlackText: "var(--light-mode-text)",
  lightGrayText: "var(--very-light-gray)",

  header: document.querySelector("header"),

  themeBtn: document.querySelector(".theme-btn"),
  backBtn: document.querySelector(".back-btn"),

  searchBox: document.querySelector(".search-box"),
  searchInput: document.querySelector(".search-input"),

  selected: document.querySelector(".selected"),
  optionsContainer: document.querySelector(".options-container"),
  arrowUp: document.querySelector(".fa-arrow-up"),

  gridContainer: document.querySelector(".grid-container"),
  parentDetailsContainer: document.querySelector(
    ".parent-country-details-container"
  ),
  detailsContainer: document.querySelector(".details-container"),

  gridItemTitle: ".item-title",

  flagContainer: ".flag-container",
  details: ".country-details-container",
  neighbor: ".neighbor",
};
