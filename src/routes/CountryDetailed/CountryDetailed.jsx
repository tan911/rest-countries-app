import { useContext } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowBack } from "../../assets/arrow-back-outline.svg";
import CountryDetailedData from "../../components/CountryDetailedData/CountryDetailedData";
import CountriesContext from "../../context/countries";

function CountryDetailed() {
  const { countries, countryName } = useContext(CountriesContext);

  // The 'countryName' value it's either the country name or the borders name.
  const filterCountryByName = countries.filter((country) => {
    return country.name.common === countryName || country.cca3 === countryName;
  });

  return (
    <div className="p-7 px-6 md:px-10 2xl:pt-14 2xl:px-24">
      <div className="inline-block">
        <Link to="/" className="link-back">
          <ArrowBack aria-hidden="true" focusable="false" />
          Back
        </Link>
      </div>
      <div className="mt-12">
        {filterCountryByName.map((country) => (
          <div
            key={country.area}
            className="flex flex-col gap-12 lg:flex-row lg:gap-24 2xl:gap-40"
          >
            <div className="h-auto w-full">
              <img
                src={country.flags.svg}
                alt={`flag of ${country.name.common}`}
                className="country-detailed-image"
              />
            </div>
            <CountryDetailedData country={country} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryDetailed;
