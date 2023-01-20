import Country from "./Country";

function ShowCountry({ countriesData, fdata }) {
  const filterCountries = countriesData.filter((country) => {
    return country.region === fdata || country.name.common === fdata;
  });

  const isCountries =
    filterCountries.length === 0 ? countriesData : filterCountries;

  return (
    <ul className="grid grid-cols-1 gap-10 mx-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mx-10 2xl:mx-24">
      {isCountries.map((country) => (
        <Country key={Math.random() * country.area} country={country} />
      ))}
    </ul>
  );
}

export default ShowCountry;
