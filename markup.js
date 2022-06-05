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
          <h2 class="title">${data.name.common}</h2>
          <p class="discription-1">Population: ${data.population}</p>
          <p class="discription-2">Region: ${data.region}</p>
          <p class="discription-3">Capital: ${data.capital}</p>
        </div>
      </div>
`;
};
