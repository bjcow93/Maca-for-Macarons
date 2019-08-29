import Cart from "./cart";
import { closeCart } from "../../actions/ui_actions";
import { connect } from "react-redux";
import { removeItem } from "../../actions/cart_actions";

const mapStateToProps = state => {
  let macarons = Object.values(state.macarons).filter(
    macaron => macaron.id in state.cart
  );

  return {
    status: state.ui.cart,
    cart: state.cart,
    macarons: macarons,
    open: state.ui.open
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeCart: () => dispatch(closeCart()),
    removeItem: id => dispatch(removeItem(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
