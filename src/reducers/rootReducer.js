import { combineReducers } from "redux";
import cartData from "./cartReducer";
import { productData } from "./productReducer";

const rootReducer = combineReducers({
  cartData,
  productData,
});
export default rootReducer;
