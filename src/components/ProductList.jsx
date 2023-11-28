// components/ProductList.js
import { connect } from "react-redux";
import { addToCart } from "../redux/actions";

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product._id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { addToCart })(ProductList);
