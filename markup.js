import icon from "/icons.svg";

export const renderCard = function (data) {
  return `
        <div class="grid-item" >
        <img
          src="${data.flags.svg}"
          alt="image-1"
          width="300"
          height="200"
        />
        <div class="content-details">
          <h2 class="item-title">${data.name.common}</h2>
          <p class="item-population">Population: <span>${data.population.toLocaleString(
            "en-US"
          )}</span></p>
          <p class="item-region">Region: <span>${data.region}</span></p>
          <p class="item-capital">Capital: <span>${data.capital}</span></p>
        </div>
      </div>
`;
};

export const renderCountry = function (data, borders) {
  return `
  <div class="flag-container">
    <img src="${data.flags.svg}" alt="Flag image" />
  </div>

  <div class="country-details-container">
    <h2 class="country-title">${data.name.common}</h2>
    <div class="country-details">
      <p class="country-native-name">Native Name: <span>${
        Object.values(data.name.nativeName)[0].official
      }</span></p>
      <p class="country-population">Population:  <span>${data.population.toLocaleString(
        "en-US"
      )}</span></p>
      <p class="country-region">Region: <span>${data.region}</span></p>
      <p class="country-subregion">Region: <span>${data.subregion}</span></p>
      <p class="country-capital">Capital: <span>${data.capital}</span></p>
      <p class="country-domain">Top Level Domain: <span>${
        data.tld[0]
      }</span></p>
      <p class="country-languages">Languages: <span>${Object.values(
        data.languages
      ).join(", ")}</span></p>
      <p class="country-currency">Currencies: <span>${
        Object.values(data.currencies)[0].name
      }</span></p>
    </div>  

    <div class="border-countries">
      <h4 class="border-country-title">Border Countries:</h4>

      <div class="country-neighbors">
        ${borders.map((el) => `<p>${el}</p>`).join(" ")}
      </div>
    </div>
  </div>
  `;
};

export const renderSpinner = function (element) {
  const markup = `
  <div class="spinner">
    <svg>
      <use href="${icon}icon-loader"></use>
    </svg>
  </div>
`;

  document.querySelector(element).insertAdjacentHTML("beforeend", markup);
};

export const clearSpinner = function () {
  document.querySelector(".spinner").remove();
};
