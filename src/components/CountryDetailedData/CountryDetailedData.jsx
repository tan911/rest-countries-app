import Borders from "./Borders";

function CountryDetailedData({ country }) {
    console.log(country.currencies)

  return (
    <div className="w-full flex flex-col gap-4 lg:my-auto lg:gap-6 2xl:gap-16">
      <h2 className="text-2xl font-bold 2xl:text-5xl">{country.name.common}</h2>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
        <div className="container-detailed">
          <p>
            Native Name: <span>{country.name.common}</span>
          </p>
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
      <div className="flex flex-col gap-5 sm:flex-row">
        <h3 className="2xl:text-2xl">Border Countries: </h3>
        <Borders borders={country.borders} />
      </div>
    </div>
  );
}

export default CountryDetailedData;
