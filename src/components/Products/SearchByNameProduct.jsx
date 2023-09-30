import React from 'react';

const Search = ({ searchKeyword, handleSearch }) => {
  return (
    <div className='search pb-3 ' style={{ marginLeft: "auto", width: 400 }}>
      <form
        action=""
        className="search"
        style={{ height: 38 }}
      >
        <span className="icon-large">
          <i className="ri-search-line" />
        </span>
        <input
          type="search"
          placeholder="Search by name products"
          style={{ height: 38, borderRadius: 0 }}
          value={searchKeyword}
          onChange={handleSearch}
        />
        <button type="submit" style={{ borderRadius: 0 }}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
