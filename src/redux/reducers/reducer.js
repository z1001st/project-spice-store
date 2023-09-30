import newsData from "../../components/News/newsData";
import Cardsdata from "../../data/CardsData";
const INIT_STATE = {
  carts: [],
  selectedProduct: null,
  products: Cardsdata,
  filteredProducts: Cardsdata,
  searchKeyword: '',
  sortOption: '',
  newsData: newsData,

};



export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {

    case 'FETCH_NEWS_DATA':
      return {
        ...state,
        newsData: action.payload,
      };

    case 'SET_SEARCH_KEYWORD':
      return {
        ...state,
        searchKeyword: action.payload,
      };
    case 'SET_SORT_OPTION':
      return {
        ...state,
        sortOption: action.payload,
      };



    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };

    case 'FILTER_PRODUCTS_BY_CATEGORY':
      const category = action.payload;
      const filteredProducts = state.products.filter((product) => product.category === category);
      return {
        ...state,
        filteredProducts,
      };

    case 'SET_SELECTED_PRODUCT':
      return {
        ...state,
        selectedProduct: action.payload,
      };

    case 'ADD_CART':
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        const updatedCart = [...state.carts];
        updatedCart[itemIndex].qnty += 1;
        return {
          ...state,
          carts: updatedCart,
        };
      } else {
        return {
          ...state,
          carts: [...state.carts, { ...action.payload, qnty: 1 }],
        };
      }

    case 'RMV_CART':
      const updatedCart = state.carts.filter((item) => item.id !== action.payload);
      return {
        ...state,
        carts: updatedCart,
      };

    case 'RMV_ONE':
      const itemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);

      if (itemIndex_dec >= 0 && state.carts[itemIndex_dec].qnty > 1) {
        const updatedCart = [...state.carts];
        updatedCart[itemIndex_dec].qnty -= 1;
        return {
          ...state,
          carts: updatedCart,
        };
      } else {
        const updatedCart = state.carts.filter((item) => item.id !== action.payload.id);
        return {
          ...state,
          carts: updatedCart,
        };
      }

    default:
      return state;
  }
};


