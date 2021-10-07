import {connect} from 'react-redux'
import Shop from '../components/Shop'

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => ({

})

export const ShopContainer = connect(mapStateToProps,mapDispatchToProps)(Shop);
