import { useContext } from "react";
import { Link } from "react-router-dom";

import CountriesContext from "../../context/countries";

function CountryDetailed() {
  const { countries, countryName } = useContext(CountriesContext);

  const filterCountryByName = countries.filter((country) => {
    return country.name.common === countryName;
  });

  return (
    <div className="p-7 px-4 md:px-10 2xl:pt-14 2xl:px-24">
      <Link to="/" className="py-2 px-4 shadow bg-white dark:bg-el-dark-blue">
        Back
      </Link>
      <div></div>
    </div>
  );
}

export default CountryDetailed;
