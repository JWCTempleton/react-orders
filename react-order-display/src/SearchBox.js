import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <input
            className="pa3 ba mb3 b--washed-green bg-lightest-blue"
            type="search"
            placeholder="search orders"
            onChange={searchChange}
        />
    );
}

export default SearchBox;