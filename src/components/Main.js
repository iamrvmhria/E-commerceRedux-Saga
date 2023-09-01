import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions";
import { productList } from "../actions/productAction";

export default function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.log(data);

  useEffect(() => {
    dispatch(productList());
    //  eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img className="imageFromApi" src={item.photo} alt="" />
            <p>Name : {item.name}</p>
            <p>Brand : {item.brand}</p>
            <p>Color : {item.color}</p>
            <p>Price : {item.price}</p>
            <p>Category : {item.category}</p>
            <button
              className="productBtn"
              onClick={() => dispatch(addToCart(item))}
            >
              Add to Cart
            </button>
            <button
              className="productBtn"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
