import Borders from "./Borders";

function CountryDetailedData({ country }) {
  if(country.population === 0) return;

  // Native Name
  const nativeName = Object.entries(country.name.nativeName);

  // Capital
  const capital = Object.entries(country.capital);

  // Currencies
  const currencies = Object.entries(country.currencies);

  // Languages
  const languages = Object.entries(country.languages);

  return (
    <div className="w-full flex flex-col gap-4 lg:my-auto lg:gap-6 2xl:gap-16">
      <h2 className="text-2xl font-bold 2xl:text-5xl">{country.name.common}</h2>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
        <div className="container-detailed">
          <p>
            Native Name: <span>{nativeName.flat(1)[1].official}</span>
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
            Capital: <span>{capital.flat(1)[1]}</span>
          </p>
        </div>
        <div className="container-detailed">
          <p>
            Top Level Domain: <span>{country.tld[0]}</span>
          </p>
          <p>
            Currencies: <span>{currencies[0][1].name}</span>
          </p>
          <p>
            Languanges:{" "}
            {languages.flat(1).map((lang) => (
              <span key={Math.floor(Math.random() * 10000)}>{lang}, </span>
            ))}
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
