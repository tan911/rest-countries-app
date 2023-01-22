import { useEffect, useContext } from "react";

import Operation from "../../components/Operate/Operation";
import ShowCountry from "../../components/Country/ShowCountry";
import CountriesContext from "../../context/countries";

function Home() {
  const { fetchCountries } = useContext(CountriesContext);

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <main>
      <Operation />
      <div className="my-10 2xl:my-16">
        <ShowCountry />
      </div>
    </main>
  );
}

export default Home;
