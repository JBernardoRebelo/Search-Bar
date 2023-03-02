import React from "react";
import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
	return (
		<div className="search">
			<div className="searchInputs"></div>
			<input type="text" placeholder={placeholder} />
			<div className="searchIcon"></div>
			<div className="dataResult"></div>
		</div>
	);
}

export default SearchBar;
