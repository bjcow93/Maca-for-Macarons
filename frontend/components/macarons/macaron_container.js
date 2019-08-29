import { connect } from "react-redux";
import MacaronPage from "./macaron";
import { fetchMacarons } from "../../actions/macaron_actions";
import { receiveItem } from "../../actions/cart_actions";
import { openCart } from "../../actions/ui_actions";

const mapStateToProps = state => ({
  macarons: state.macarons,
  cart: state.cart,
  open: state.ui.open
});

const mapDispatchToProps = dispatch => ({
  fetchMacarons: () => dispatch(fetchMacarons()),
  openCart: () => dispatch(openCart()),
  receiveItem: item => dispatch(receiveItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MacaronPage);
