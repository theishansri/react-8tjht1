import React from "react";
import axios from "axios";
import ProductDescription from "./Product-description";

export default class Products extends React.Component {
  state = {
    products: [],
  };
  async componentDidMount() {
    let products = await axios.get("https://fakestoreapi.com/products");
    this.setState({
      products: products.data,
    });
  }
  render() {
    return (
      <div data-testid="parent-container" className="container">
        <ProductDescription products={this.state.products} />
      </div>
    );
  }
}
