import React from "react";

class MacaronPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleText = this.toggleText.bind(this);
  }

  componentDidMount() {
    this.props.fetchMacarons();
  }

  handleSubmit(e) {
    let item = this.props.macarons[Number(e.currentTarget.id)];
    Promise.resolve(this.props.receiveItem(item)).then(this.props.openCart());
  }

  toggleText(e, macaron) {
    var moreText = document.getElementById("more" + macaron.id);
    var btnText = document.getElementById(e.target.id);

    if (btnText.innerHTML == "Read More") {
      moreText.style.display = "flex";
      btnText.innerHTML = "Read Less";
    } else {
      btnText.innerHTML = "Read More";
      moreText.style.display = "none";
    }
  }

  render() {
    const { cart, openCart } = this.props;
    const macarons = Object.values(this.props.macarons);

    const cartCount =
      Object.values(cart).length == 0 ? (
        <div></div>
      ) : (
        <span className="badge badge-warning" id="lblCartCount">
          {Object.values(cart).reduce(
            (acc, current) => Number(acc) + Number(current),
            0
          )}
        </span>
      );

    return (
      <div>
        <section className="navbar">
          <img src="assets/images/logo.svg" className="logo" />

          <div className="header-right">
            <div className="navigation-items">
              <div className="nav-item">Menu</div>

              <div className="nav-item">Beverages</div>

              <div className="nav-item">Gifts</div>
            </div>

            <div className="header-cart" onClick={openCart}>
              <img
                className="header-cart-img"
                src="assets/images/cart_icon.svg"
              />
              {cartCount}
              <p className="header-cart-word">Cart</p>
            </div>
          </div>
        </section>
        <main className="main">
          <h1 className="menu-title">Menu</h1>
          <section className="all-macarons">
            {macarons.map((macaron, i) => (
              <section key={macaron.id} className="each-macaron">
                <div
                  className="macaron-image"
                  style={{ backgroundImage: `url(${macaron.image_url})` }}
                ></div>

                <section className="macaron-middle">
                  <div className="menu-mac-name">{macaron.name}</div>

                  <div className="menu-mac-type">{macaron.type}</div>

                  <p className="menu-mac-description">
                    {macaron.description.split("...")[0]}
                  </p>
                  <p
                    className="menu-mac-description"
                    id={"more" + macaron.id}
                    style={{ display: "none" }}
                  >
                    <br />
                    {macaron.description.split("...")[1]}
                  </p>

                  <button
                    className="toggletext-btn"
                    onClick={e => {
                      this.toggleText(e, macaron);
                    }}
                    id={"myBtn" + macaron.id}
                  >
                    Read More
                  </button>
                </section>

                <section className="macaron-right">
                  <p className="menu-mac-price">${macaron.price}/ea.</p>

                  <button
                    className="add-to-cart"
                    id={macaron.id}
                    onClick={this.handleSubmit}
                  >
                    {Object.keys(cart).includes(String(macaron.id)) ? (
                      <p>&#10003; Added to Cart</p>
                    ) : (
                      <p>+ Add to Cart</p>
                    )}
                  </button>
                </section>
              </section>
            ))}
          </section>
        </main>

        <footer className="footer">
          <div className="footer-left">
            <p>
              We are committed to serving the freshest, most delightful treats.
            </p>

            <div>
              <a href="https://www.facebook.com/">
                <img
                  src="assets/images/facebook_icon.svg"
                  className="social-media-logos"
                />
              </a>
              <a href="https://www.instagram.com/">
                <img
                  src="assets/images/instagram_icon.svg"
                  className="social-media-logos"
                />
              </a>
              <a href="https://twitter.com/?lang=en">
                <img
                  src="assets/images/twitter_icon.svg"
                  className="social-media-logos"
                />
              </a>
            </div>

            <p>@ 2019 MACARONS</p>
          </div>

          <div className="footer-right">
            <div className="footer-links">
              <a href="" style={{ color: "green" }}>
                Company
              </a>
              <a href="">About</a>
              <a href="">Locations</a>
              <a href="">Contact Us</a>
            </div>

            <div className="footer-links">
              <a href="" style={{ color: "green" }}>
                Orders
              </a>
              <a href="">Order Tracker</a>
              <a href="">Delivery FAQs</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default MacaronPage;
