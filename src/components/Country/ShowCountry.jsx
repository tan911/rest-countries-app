import { useContext } from "react";

import Country from "./Country";
import CountriesContext from "../../context/countries";

function ShowCountry() {
  const { countries, filterData } = useContext(CountriesContext);

  const filterCountries = countries.filter((country) => {
    return country.region === filterData || country.name.common === filterData;
  });

  const isCountries =
    filterCountries.length === 0 ? countries : filterCountries;

  return (
    <ul className="grid grid-cols-1 gap-10 mx-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mx-10 2xl:mx-24">
      {isCountries.map((country) => (
        <Country key={Math.random() * country.area} country={country} />
      ))}
    </ul>
  );
}

export default ShowCountry;
