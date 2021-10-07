import { GET_PRODUCTS } from "../constants/GetProducts";

const productState = {
  
    products: [],
    fetching: false,
    fetched: false,
    error: null,
}
export default function products(state=productState, action){
    switch (action.type) {
      case GET_PRODUCTS.GET_PRODUCTS_PENDING:
        return {...state, fetching: true, fetched: false, error: null};
  
      case GET_PRODUCTS.GET_PRODUCTS_FULFILLED:
        return {    ...state, fetching: false, fetched: true, error: null, products: [...action.payload.data]    };
     
      case GET_PRODUCTS.GET_PRODUCTS_REJECTED:
        return {
          ...state,
          fetching: false,
          fetched: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  }