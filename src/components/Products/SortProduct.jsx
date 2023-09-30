import React from 'react';

const Sort = ({ sortOption, handleSortChange }) => {
    
  return (
    <div className="product-sort">
      <form id="productsSortForm" action="#" className="productsSortForm">
        <div className="selector-form">
          <select
            className="form-select no-effect-focus"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="">SORT BY</option>
            <option value="price:asc">Price: Lowest first</option>
            <option value="price:desc">Price: Highest first</option>
            <option value="name:asc">Product Name: A to Z</option>
            <option value="name:desc">Product Name: Z to A</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Sort;
