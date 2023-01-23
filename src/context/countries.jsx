import { createContext, useState } from "react";
import axios from "axios";

const CountriesContext = createContext();

function Provider({ children }) {
  const [countries, setCountries] = useState([]);
  const [filterData, setFilterData] = useState("");
  const [countryName, setCountryName] = useState("");

  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  // Filtered / Searched Country
  const operationDatahandler = (data) => {
    setFilterData(data);
  };

  // Country Detailed
  const countryDetailed = (data) => {
    setCountryName(data);
  };

  // Borders
  const border = (data) => {
    setCountryName(data);
  };

  const countriesData = {
    countries,
    filterData,
    countryName,
    border,
    fetchCountries,
    operationDatahandler,
    countryDetailed,
  };

  return (
    <CountriesContext.Provider value={countriesData}>
      {children}
    </CountriesContext.Provider>
  );
}

export { Provider };
export default CountriesContext;
