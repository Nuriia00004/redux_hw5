import PropTypes from 'prop-types';  // Import PropTypes
import { connect } from 'react-redux';

const Navbar = ({ cart }) => {
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div>
      <h2>Navbar</h2>
      <p>Cart Items: {cartItemCount}</p>
    </div>
  );
};

// Add PropTypes validation
Navbar.propTypes = {
  cart: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Navbar);
