const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  console.log(countries[0]);

  const allCountriesHtml = countries.map((country) => getCountryHtml(country));

  // console.log(allCountriesHtml[0]);
  const container = document.getElementById("countryes");
  container.innerHTML = allCountriesHtml.join(" ");
};

const getCountryHtml = ({ name, flags,area,region }) => {
//   const  = country;
  return `
    
    <div class="country align">
    
    <h2> ${name.common}</h2>
    <h2> Area: ${area}</h2>
    <h2> Region: ${region}</h2>
    <img class="r" src="${flags.png}">
    
    </div>
    
    
    `;
};
// const getCountryHtml = (country) => {
//   const { name, flags } = country;
//   return `
    
//     <div class="country">
    
//     <h2> ${name.common}</h2>
//     <img src="${flags.png}">
    
//     </div>
    
    
//     `;
// };

loadCountries();
