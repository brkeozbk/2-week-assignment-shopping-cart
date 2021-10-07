import React, { Component } from "react";
import { Link } from "react-router-dom";

class Shop extends Component {


  render() {
   
    const { products, fetching } = this.props.products;

    const result = products.filter((v,i) => {
      return products.map((val)=> val.category).indexOf(v.category) === i
   })

    if (fetching) {
      return <div> Yükleniyor </div>;
    } else {
      return (
        <div style={{ display: "flex" }}>
          <> 
            <div
              style={{
                borderColor: "blue",
                borderStyle: "solid",
                margin: "2px",
                display: "inline-block",
              }}
            >
              Kategoriler
              {result.map((product) => (

                <label key={product.id} style = {{display:"block"}}>
                  <input type="checkbox"
                   />
                  {product.category}
                  </label>
              ))}
            </div>
            <div
              style={{
                borderColor: "red",
                borderStyle: "solid",
                margin: "2px",
                display: "block",
              }}
            >
              {products.map((product, i) => {
                return (
                  <div style={{ display: "inline-block" }}>
                    <img
                      key={product.id}
                      src={product.image}
                      alt={product.title}
                      width="125px"
                    />
                    <Link
                      key={i}
                      to={`/stories/${product.id}`}
                      style={{ display: "block" }}
                    >
                      
                      {product.title}
                    </Link>
                    <p key={i}> {product.price}₺ </p>
                    <p key={i}>
                      {product.rating.rate}* - {product.rating.count}
                      değerlendirme
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        </div>
      );
    }
  }
}

export default Shop;
