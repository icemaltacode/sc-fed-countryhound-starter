import { useState, useEffect } from 'react';
import './App.css';

// TODO Use this in the CountryContainer component
// return {
//   name: country.name.common,
//   officialName: country.name.official,
//   nativeName: country.name.nativeName ? country.name.nativeName[Object.keys(country.name.nativeName)[0]].common : "--",
//   cca2: country.cca2,
//   cca3: country.cca3,
//   currencies: country.currencies ? Object.keys(country.currencies).toString() : "--",
//   region: country.region,
//   subRegion: country.subregion,
//   languages: country.languages ? Object.values(country.languages).join(', ') : "--",
//   coordinates: country.latlng,
//   population: country.population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
//   timeZones: Object.keys(country.timezones).toString(),
//   flag: country.flags.svg,
//   flagAlt: country.flags.alt,
//   flagEmoji: country.flag
// }

function App() {
  return <div className='container-fluid container-bg'>
    <h1>CountryHound</h1>
  </div>
};

export default App;