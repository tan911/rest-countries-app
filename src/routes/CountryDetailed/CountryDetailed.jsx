import { useContext } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowBack } from "../../assets/arrow-back-outline.svg";
import CountriesContext from "../../context/countries";

function CountryDetailed() {
  const { countries, countryName } = useContext(CountriesContext);

  const filterCountryByName = countries.filter((country) => {
    return country.name.common === countryName;
  });

  console.log(filterCountryByName);

  return (
    <div className="p-7 px-6 md:px-10 2xl:pt-14 2xl:px-24">
      <div className="inline-block">
        <Link
          to="/"
          className="py-2 px-4 shadow rounded-md bg-white dark:bg-el-dark-blue flex justify-center items-center gap-2"
        >
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
            <div className="w-full flex flex-col gap-4 lg:my-auto lg:gap-6 2xl:gap-16">
              <h2 className="text-2xl font-bold 2xl:text-5xl">
                {country.name.common}
              </h2>
              <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                <div className="container-detailed">
                  <p>
                    Native Name: <span>{country.name.common}</span>
                  </p>
                  <p>
                    Population:{" "}
                    <span>
                      {new Intl.NumberFormat("en-us").format(
                        country.population
                      )}
                    </span>
                  </p>
                  <p>
                    Region: <span>{country.region}</span>
                  </p>
                  <p>
                    Sub Region: <span>{country.subregion}</span>
                  </p>
                  <p>
                    Capital: <span>capital</span>
                  </p>
                </div>
                <div className="container-detailed">
                  <p>
                    Top Level Domain: <span>{country.tld[0]}</span>
                  </p>
                  <p>
                    Currencies: <span>currencies</span>
                  </p>
                  <p>
                    Languanges: <span>languages</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="2xl:text-2xl">Border Countries: </h3>
                <Link></Link>
                <Link></Link>
                <Link></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryDetailed;
