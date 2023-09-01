import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/dist";
import { productSearch } from "../actions/productAction";

export default function Header() {
  const result = useSelector((state) => state.cartData);
  const dispatch =  useDispatch()
  console.log(result);
  return (
    <div>
      <div className="header">
        <div>
        <Link to={"/"}>
          <h1 className="logo">E-Comm</h1>
        </Link>
        </div>
        <div className="search-box">
          <input type="text" onChange={(event)=>dispatch(productSearch(event.target.value))} placeholder="Search Product" />
        </div>
        <div>
        <Link to="/cart">
          <header className="cart-div">
            <span>{result.length}</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              alt=""
            />
          </header>
        </Link>
        </div>
      </div>
    </div>
  );
}
