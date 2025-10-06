import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [clearPage, setClearPage] = useState(true);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    setClearPage(false);
  };
  return (
    <div className="text-center bg-gradient-to-r from-gray-200 to-blue-200">
      {clearPage && (
        <div className="w-6/12 m-auto border-2 border-gray-50 bg-white">
          <div className="flex justify-between">
            <h1 className="px-4 py-2 m-4 text-3xl font-bold">Cart</h1>
            <button
              className="text-xl font-bold px-4 py-2 m-4 bg-green-100  hover:bg-green-200 rounded-lg cursor-pointer"
              onClick={() => {
                handleClearCart();
              }}
            >
              Clear Cart
            </button>
          </div>
          <ItemList items={cartItems} showButton={false} />
        </div>
      )}
    </div>
  );
};

export default Cart;
