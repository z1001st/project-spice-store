

export const fetchNewsData = (newsData) => {
  return {
    type: 'FETCH_NEWS_DATA',
    payload: newsData,
  };
};

export const setSearchKeyword = (keyword) => ({
  type: 'SET_SEARCH_KEYWORD',
  payload: keyword,
});

export const setSortOption = (option) => ({
  type: 'SET_SORT_OPTION',
  payload: option,
});



export const filterProductsByCategory = (category) => ({
  type: 'FILTER_PRODUCTS_BY_CATEGORY',
  payload: category,
});

export const setFilteredProducts = (filteredProducts) => ({
  type: 'SET_FILTERED_PRODUCTS',
  payload: filteredProducts,
});

export const ADD_TO_CART = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const setSelectedProduct = (product) => ({
  type: 'SET_SELECTED_PRODUCT',
  payload: product,
});

export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item
  }
}

export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id
  }
}


export const REMOVE = (iteam) => {
  return {
    type: "RMV_ONE",
    payload: iteam
  }
}