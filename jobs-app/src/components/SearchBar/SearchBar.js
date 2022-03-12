import "./SearchBar.css";
import { ReactComponent as FilterIcon } from "../../assets/icon-filter.svg";
import { ReactComponent as LocationIcon } from "../../assets/icon-location.svg";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import { useState } from "react";

function SearchBar({ filter }) {
  const [openFilter, setOpenFilter] = useState(false);
  const [searchFields, setSearchTerms] = useState({
    term: "",
    location: "",
    fullTime: false,
  });

  const handleClick = () => {
    setOpenFilter(!openFilter);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setSearchTerms({ ...searchFields, [name]: value });
  };

  const handleCheckboxChange = ({ target }) => {
    const { checked } = target;

    setSearchTerms({ ...searchFields, fullTime: checked });
  };

  const search = () => {
    filter(searchFields);
  };

  return (
    <div className="search-bar">
      <div className="search-bar__input-field search-bar__input-field--search">
        <span className="search-bar__icon search-bar__icon--search">
          <SearchIcon />
        </span>
        <input
          name="term"
          type="text"
          value={searchFields.term}
          placeholder="Filter by title..."
          onChange={handleChange}
        />
      </div>

      <div
        className={
          openFilter
            ? "search-bar__hide-mobile show"
            : "search-bar__hide-mobile"
        }
      >
        <div className="search-bar__input-field ">
          <span className="search-bar__icon">
            <LocationIcon />
          </span>
          <input
            type="text"
            name="location"
            value={searchFields.location}
            placeholder="Filter by location..."
            onChange={handleChange}
          />
        </div>
        <hr />

        <div className="search-bar__input-field">
          <input
            type="checkbox"
            name="fullTime"
            id="full-time-checkbox"
            checked={searchFields.fullTime}
            onChange={handleCheckboxChange}
          />
          <label className="bold">Full Time Only</label>
        </div>
        <button onClick={search}> Search </button>
      </div>

      <div className="search-bar__show-mobile">
        <button
          className="search-bar__show-mobile__button--filter"
          onClick={handleClick}
        >
          <FilterIcon />
        </button>

        <button
          className="search-bar__show-mobile__button--search"
          onClick={search}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
