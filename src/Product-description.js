import React from 'react';

export default class ProductDescription extends React.Component {
  state = {
    displayDetails: {},
  };
  onClickHandler = (product) => {
    console.log(product);
    this.setState((prevState) => ({
      displayDetails: {
        ...prevState.displayDetails,
        [product.id]: true,
      },
    }));
    console.log(this.state.displayDetails);
  };
  render() {
    const { products } = this.props;

    return (
      <div>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="prod-card" key={product.id}>
                <div className="prod-content">
                  <div
                    className="prod-title"
                    onClick={() => this.onClickHandler(product)}
                  >
                    {product.title}
                  </div>
                  <div className="prod-desc">
                    {product.description.slice(0, 50) + '...'}
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
                        <div className="prod-details-description">
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
