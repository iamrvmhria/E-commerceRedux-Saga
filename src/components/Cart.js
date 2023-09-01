import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/dist";
import { emptyCart } from "../actions";

export default function Cart() {
  const CartData = useSelector((state) => state.cartData);
  console.log(CartData);
  const amount=CartData.length&& CartData.map(item=>item.price).reduce((prev,next)=>prev+next)
  const discount = amount/10;
  const tax = (amount-discount)*6/100;
  const total = amount-discount+tax

  const productStyle = {
      display: 'block',
      margin: '10px',
      fontSize: '25px',
      padding: '5px'
    }

  const dispatch = useDispatch()

  function orderPlaced(){
   alert('Your Order successfully Placed')
  }
      
  return (
    <>
      <div className="App">
        <button className="cart-Btn" onClick={orderPlaced}>Place Order</button>
        <button className="cart-Btn" onClick={() => dispatch(emptyCart())}>Empty Cart</button> <br />
      </div>
   <div className="App">
      <Link to="/" style={productStyle}> Product List</Link>
      <h2 style={productStyle}>Added Product in Cart </h2>
      <hr /> <br />
      <div className="cart-page-container">
        <table>
          <tbody>
          <tr>
            <td>Name</td>
            <td>Color</td>
            <td>Category</td>
            <td>Brand</td>
            <td>Price</td>
          </tr>
          </tbody>
          {CartData.map((item) => (
            <tbody key={item.id} >
            <tr >
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.category}</td>
              <td>{item.brand}</td>
              <td>{item.price}</td>
            </tr>
            </tbody>
          ))}
        </table>
        <div className="price-details">
          <div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
          <div className="adjust-price"><span>Discount</span><span>{discount}</span></div>
          <div className="adjust-price"><span>Tax(GST)</span><span>{tax}</span></div>
          <div className="adjust-price"><span>Total</span><span>{total}</span></div>
        </div>
      </div>
    </div>
    </>
  )
}
