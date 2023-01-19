function ShowCountry({ countriesData }) {
  console.log(countriesData);
  return (
    <ul className="grid grid-cols-1 gap-4 mx-8">
      {countriesData.map((country) => (
        <li
          key={Math.random() * country.area}
          className="bg-white dark:bg-el-dark-blue shadow-md"
        >
          <a href="#country">
            <img src={country.flags.svg} alt="" />
            <div>
              <h2>{country.name.common}</h2>
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
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ShowCountry;
