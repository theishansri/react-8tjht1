import React from "react";

export default class ProductDescription extends React.Component {
  state = {
    displayDetails: {},
  };
  onClickHandler = (product) => {
    this.setState((prevState) => ({
      displayDetails: {
        ...prevState.displayDetails,
        [product.id]: true,
      },
    }));
  };
  render() {
    const { products } = this.props;

    return (
      <div>
        <div className="row">
          {products.map((product) => {
            return (
              <div data-testid="card" className="prod-card" key={product.id}>
                <div className="prod-content" data-testid="card-content">
                  <div
                    className="prod-title"
                    data-testid="card-title"
                    onClick={() => this.onClickHandler(product)}
                  >
                    {product.title}
                  </div>
                  <div className="prod-desc">
                    {product.description.slice(0, 50) + "..."}
                  </div>
                  {this.state.displayDetails[product.id] && (
                    <span className="prod-details">
                      <span className="prod-image-parent">
                        <img
                          src={product.image}
                          alt="prod-image"
                          className="prod-image"
                        />
                      </span>
                      <span className="prod-details-desc">
                        <div
                          className="prod-details-description"
                          data-testid="prod-full-description"
                        >
                          {product.description}
                        </div>
                      </span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
