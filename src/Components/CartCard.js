import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/constants/cartSlice";

const CartCard = ({ sareeInfo }) => {
  const dispatch = useDispatch();
  console.log(sareeInfo);

  const { image, name, design, fabric, color, price } = sareeInfo;

  const handleRemoveBtn = () => {
    dispatch(removeItem(sareeInfo.id));
  }

  return (
    <>
      <div className="bg-[#38858c] w-[56%] mb-4 rounded-xl flex">
        <div className="w-72 h-56">
          <img
            className="h-full w-full object-cover rounded-l-xl"
            alt="saree-photo"
            src={image}
          />
        </div>
        <div className="p-10">
          <ul className="text-xl text-[#c9ae57]">
            <li className="font-semibold">{name}</li>
            <li>{design}</li>
            <li>{color}</li>
            <li>{fabric}</li>
            <li>₹ {price}</li>
          </ul>
        </div>
        <div className="text-end border-2 border-[#9ACBD0] transition-all duration-300 hover:bg-[#9ACBD0] absolute left-[71.80vw] px-2 py-1 text-lg rounded-xl">
          <button onClick={()=>handleRemoveBtn()}>Remove</button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
