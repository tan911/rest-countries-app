import { useState } from "react";

import SearchForm from "./SearchForm";
import RegionFilter from "./RegionFilter";

function Operation(props) {
  const [selectedRegion, setSelectedRegion] = useState("");

  // Filter
  const filterRegionHandler = (region) => {
    setSelectedRegion(region);
    props.onDataItem(region);
  };

  // Search
  const searchCountryHandler = (item) => {
    props.onDataItem(item);
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
