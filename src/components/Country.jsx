import { Link } from "react-router-dom";

function Country({ country }) {
  return (
    <>
      <li className="inline-table bg-white h-fit dark:bg-el-dark-blue shadow-md rounded-br-md rounded-bl-md">
        <Link to="/country">
          <div className="h-2/4 overflow-hidden">
            <img
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
            />
          </div>
          <div className="pt-6 pb-10 px-6">
            <h2 className="text-lg font-bold mb-2">{country.name.common}</h2>
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
