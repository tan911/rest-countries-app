import { useState, useEffect } from "react";
import axios from "axios";

import Operation from "../../components/Operation";
import ShowCountry from "../../components/ShowCountry";

function Home() {
  const [countries, setCountries] = useState([]);
  const [filterData, setFilterData] = useState("");

  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const dataHandler = (data) => {
    setFilterData(data);
  };

  return (
    <main>
      <Operation onDataItem={dataHandler} />
      <div className="my-10 2xl:my-16">
        <ShowCountry countriesData={countries} fdata={filterData} />
      </div>
    </main>
  );
}

export default Home;
