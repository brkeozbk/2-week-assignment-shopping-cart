import React, { Component } from 'react'

 class GetCategories extends Component {
    state = {
        id:'1'
    }

    handleClick = () => {
        const {id} = this.state;
        this.props.getProducts(id);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Kategorileri Getir</button>
            </div>
        )
    }

 }
export default GetCategories;
