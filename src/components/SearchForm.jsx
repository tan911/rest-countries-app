import { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/search-outline.svg";

function SearchForm({ id, type, placeholder, onSearchItem }) {
  const [searchCountry, setSearchCounry] = useState("");

  const inputCountryHandler = (e) => {
    setSearchCounry(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    onSearchItem(searchCountry);
    setSearchCounry("");
  };

  return (
    <form onSubmit={submitFormHandler} className="relative">
      <label htmlFor={id} className="sr-only block">
        Search
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={inputCountryHandler}
        value={searchCountry}
      />
      <SearchIcon
        aria-hidden="true"
        focusable="false"
        className="absolute top-0 bottom-0 left-6 my-auto"
      />
    </form>
  );
}

export default SearchForm;
