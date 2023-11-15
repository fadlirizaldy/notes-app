import React from "react";
import { Icon } from "@iconify/react";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <div className="searchBar">
      <div className="inputField">
        <input
          type="text"
          className="searchField"
          placeholder="What note are you looking for?"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <div className="iconSearch">
          <Icon
            icon="basil:cross-solid"
            color="#818589"
            width="24"
            onClick={(e) => setKeyword("")}
            opacity={keyword.length > 0 ? "100" : "0"}
            cursor={keyword.length > 0 ? "pointer" : "default"}
          />

          <Icon
            icon="material-symbols:search"
            width="24"
            height="24"
            color="#808080"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
