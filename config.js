export const ALL_REGION_API = `https://restcountries.com/v3.1/all`;

export const SELECT_REGION_API = (region) =>
  `https://restcountries.com/v3.1/region/${region}`;

export const COUNTRY_NAME_API = (countryName) =>
  `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

export const COUNTRY_CODE_API = (code) =>
  `https://restcountries.com/v3.1/alpha/${code}`;
