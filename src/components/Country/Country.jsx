import { useContext } from "react";
import { Link } from "react-router-dom";

import CountriesContext from "../../context/countries";

function Country({ country }) {
  const { countryDetailed } = useContext(CountriesContext);

  const countryDetailedHandler = () => {
    countryDetailed(country.name.common);
  };

  return (
    <>
      <li className="inline-table bg-white h-fit dark:bg-el-dark-blue shadow-md rounded-br-md rounded-bl-md">
        <Link to="/country" onClick={countryDetailedHandler}>
          <div className="h-60 2xl:h-72 overflow-hidden">
            <img
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
              className="country-image"
            />
          </div>
          <div className="country-container pt-6 pb-10 px-6">
            <h2 className="text-lg font-bold mb-2 2xl:text-3xl 2xl:mb-8">
              {country.name.common}
            </h2>
            <p>
              Population:{" "}
              <span>
                {new Intl.NumberFormat("en-us").format(country.population)}
              </span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Capital:{" "}
              <span>
                {country.capital !== "" ? country.capital : "No capital"}
              </span>
            </p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Country;
