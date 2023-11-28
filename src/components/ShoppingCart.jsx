import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>
            <p>{item.name} - Quantity: {item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
