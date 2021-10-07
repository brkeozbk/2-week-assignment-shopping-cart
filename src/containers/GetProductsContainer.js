import GetProducts from "../components/GetProducts";
import {connect } from 'react-redux';
import { getProducts } from "../store/actions/GetProducts";

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    getProducts : (id) => dispatch(getProducts(id)),
})

export const GetProductsContainer = connect(mapStateToProps,mapDispatchToProps)(GetProducts)
