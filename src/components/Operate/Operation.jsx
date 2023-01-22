import { useState, useContext } from "react";

import SearchForm from "./SearchForm";
import RegionFilter from "./RegionFilter";
import CountriesContext from "../../context/countries";

function Operation() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const { operationDatahandler } = useContext(CountriesContext);

  // Filter
  const filterRegionHandler = (region) => {
    setSelectedRegion(region);
    operationDatahandler(region);
  };

  // Search
  const searchCountryHandler = (item) => {
    operationDatahandler(item);
  };

  return (
    <div className="flex flex-col gap-10 pt-7 px-4 md:flex-row md:justify-between md:px-10 2xl:pt-14 2xl:px-24">
      <div>
        <SearchForm
          id="search"
          type="text"
          placeholder="Search for a country..."
          onSearchItem={searchCountryHandler}
        />
      </div>
      <div>
        <RegionFilter
          selected={selectedRegion}
          onChangeFilter={filterRegionHandler}
        />
      </div>
    </div>
  );
}

export default Operation;
