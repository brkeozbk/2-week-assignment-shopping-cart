import axios  from 'axios';
import { GET_PRODUCTS } from "../constants/GetProducts";



export function getProducts(id){
    return {
        type:GET_PRODUCTS.GET_PRODUCTS,
        payload: axios.get(`http://localhost:3004/products`, [])
    }
}
