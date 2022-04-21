import Modal from '../UI/Modal';
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul classname={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}></div>
      <button className={['button--alt']}>Close</button>
      <button className={classes.button}>Order</button>
    </Modal>
  );
};

export default Cart;
