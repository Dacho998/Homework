const border = document.getElementById('border');
const apiUrl = 'https://restcountries.com/v3.1/all';
const search = document.getElementById('search');
const countryInput = document.getElementById('country');
const countriesSelect = document.getElementById('countries');
const selectCountryButton = document.getElementById('selectCountry');

let countries = [];

async function fetchCountries() {
  const response = await fetch(apiUrl);
  countries = await response.json();
  countrySelect(countries);
}

function countrySelect(countries) {
  countriesSelect.innerHTML = '';
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.cca3;
    option.textContent = country.name.common;
    countriesSelect.appendChild(option);
  });
}

function findCountry(countries, countryName) {
  const resultCountries = countries.filter(
    (country) => country.cca3 === countryName || country.name.common.toUpperCase() === countryName
  );
  return resultCountries[0];
}

function neighborCountries(countries, countryData) {
  if (countryData.borders && countryData.borders.length > 0) {
    return countries.filter((neighbor) =>
      countryData.borders.includes(neighbor.cca3)
    );
  }
  return [];
}

function displayNeighbors(neighbors) {
  border.innerHTML = '';
  if (neighbors.length > 0) {
    neighbors.forEach((neighbor) => {
      border.innerHTML += `
        <li>
          <img src="${neighbor.flags.svg}" alt="Flag of ${neighbor.name.common}" width="25" height="15">
          ${neighbor.name.common}
        </li>
      `;
    });
  } else {
    border.innerHTML = 'No neighboring countries.';
  }
}

async function searchCountry() {
  const countryName = countryInput.value.toUpperCase();
  const countryData = findCountry(countries, countryName);
  if (countryData) {
    const neighbors = neighborCountries(countries, countryData);
    displayNeighbors(neighbors);
  } else {
    border.innerHTML = 'Enter a valid country name.';
  }
}

async function selectCountry() {
  const selectedCountry = countriesSelect.value;
  const countryData = countries.find(country => country.cca3 === selectedCountry);
  if (countryData) {
    const neighbors = neighborCountries(countries, countryData);
    displayNeighbors(neighbors);
  }
}

fetchCountries();

search.addEventListener('click', searchCountry);

selectCountryButton.addEventListener('click', selectCountry);