import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../utils/constants/cartSlice";


const Cart = () => {
  const dispatch = useDispatch();
  const sareeInfo = useSelector((store) => store?.cart?.cartItems || []);
  // console.log(sareeInfo);

  const handleClearBtn = () => {
    dispatch(clearCart());
  }

  return (
    <>
      <div className="flex justify-center mt-3">
        <div className= "w-1/2">
          <button onClick={()=>handleClearBtn()} className="text-xl text-black border border-red-600 py-1 px-2 rounded-xl transition-all duration-300 hover:bg-red-600 hover:text-white"> Clear cart</button>
        </div>
      </div>
      <div className="flex-col justify-items-center mt-4">
        {sareeInfo.map((saree) => (
          <CartCard key={saree.id} sareeInfo={saree} />
        ))}
      </div>
    </>
  );
};

export default Cart;
