import React from 'react'

function Search({searchValue,handleSearch}) {
    return (
        <div>
            <input
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    )
}

export default Search
