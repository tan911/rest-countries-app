import { ReactComponent as Chevron } from "../../assets/chevron-down-outline.svg";

function RegionFilter({ onChangeFilter }) {
  const selectedRegion = (e) => {
    onChangeFilter(e.target.value);
  };
  return (
    <div className="relative inline-block">
      <label htmlFor="select" className="sr-only">
        Filter by Region
      </label>
      <select
        id="select"
        name="select"
        onChange={selectedRegion}
        defaultValue={"Filter by Region"}
      >
        <option
          label="Filter by Region"
          value="Filter by Region"
          disabled
          className="hidden"
        >
          Filter by Region
        </option>
        <option label="Africa" value="Africa">
          Africa
        </option>
        <option label="America" value="Americas">
          America
        </option>
        <option label="Asia" value="Asia">
          Asia
        </option>
        <option label="Europe" value="Europe">
          Europe
        </option>
        <option label="Oceania" value="Oceania">
          Oceania
        </option>
      </select>
      <Chevron
        aria-hidden="true"
        focusable="false"
        className="absolute right-4 top-0 bottom-0 my-auto"
      />
    </div>
  );
}

export default RegionFilter;
