import React from "react";
import Drawer from "@material-ui/core/Drawer";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.removeItem(e.target.id);
  }

  render() {
    const { macarons, cart, open, closeCart } = this.props;

    return (
      <Drawer
        className="cart-drawer"
        anchor="right"
        open={open}
        onClose={closeCart}
      >
        <button className="close-cart-button" onClick={closeCart}>
          Close
        </button>

        <div className="cart-header">My Cart</div>

        <section className="cart-main-section">
          {macarons.map((macaron, i) => (
            <section key={macaron.id} className="cart-items">
              <div
                className="macaron-cart-image-container"
                style={{ backgroundImage: `url(${macaron.image_url})` }}
              >
                <img className="macaron-cart-image" src={macaron.image_url} />
              </div>

              <section className="cart-middle">
                <div className="cart-mac-name">{macaron.name}</div>

                <div className="cart-mac-type">{macaron.type}</div>

                <div className="cart-item-quantity">
                  Quantity: {cart[macaron.id]}
                </div>

                <button
                  className="cart-remove-item"
                  id={macaron.id}
                  onClick={this.handleDelete}
                >
                  Remove
                </button>
              </section>

              <section className="cart-right">
                <p className="cart-item-price">
                  ${Number(macaron.price).toFixed(2)}
                </p>
              </section>
            </section>
          ))}
          <div className="cart-total">
            <div>Total</div>
            <div>
              $
              {macarons
                .reduce(
                  (acc, current) => (acc += current.price * cart[current.id]),
                  0
                )
                .toFixed(2)}
            </div>
          </div>
        </section>
        <div className="checkout">
          <button className="checkout-button">Continue to Checkout</button>
        </div>
      </Drawer>
    );
  }
}

export default Cart;
