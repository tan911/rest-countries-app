import { useState, useEffect } from "react";
import axios from "axios";

import Operation from "../../components/Operation";
import ShowCountry from "../../components/ShowCountry";

function Home() {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(response.data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <main>
      <Operation />
      <div className="mt-10">
        <ShowCountry countriesData={countries} />
      </div>
    </main>
  );
}

export default Home;
