import "./SearchBar.css";
import { ReactComponent as FilterIcon } from "../../assets/icon-filter.svg";
import { ReactComponent as LocationIcon } from "../../assets/icon-location.svg";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import { useState } from "react";

function SearchBar(props) {
  const [openFilter, setOpenFilter] = useState(false);

  const handleClick = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div className="search-bar">
      <div className="search-bar__input-field search-bar__input-field--search">
        <span className="search-bar__icon search-bar__icon--search">
          <SearchIcon />
        </span>
        <input type="text" placeholder="Filter by title..." />
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
          <input type="text" placeholder="Filter by location..." />
        </div>
        <hr />

        <div className="search-bar__input-field">
          <input type="checkbox" id="full-time-checkbox" />
          <label className="bold">Full Time Only</label>
        </div>
        <button> Search </button>
      </div>

      <div className="search-bar__show-mobile">
        <button
          className="search-bar__show-mobile__button--filter"
          onClick={handleClick}
        >
          <FilterIcon />
        </button>

        <button className="search-bar__show-mobile__button--search">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
