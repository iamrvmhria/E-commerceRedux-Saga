import { ADD_TO_CART, REMOVE_CART, EMPTY_CART } from "../constant";

const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];
    case REMOVE_CART:
      // console.log('removecart',action)
      // data.length = data.length?data.length-1:'';
      const remainingItem = data.filter((item) => {
       return  item.id !== action.data;
      });
      console.log(remainingItem)
      return [...remainingItem];
    case EMPTY_CART:
      return (data = []);
    default:
      return data;
  }
};

export default cartData;
