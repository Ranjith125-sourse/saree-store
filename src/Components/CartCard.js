import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/constants/cartSlice";

const CartCard = ({ sareeInfo }) => {
  const dispatch = useDispatch();
  const [isRemoving, setIsRemoving] = useState(false);
  // console.log(sareeInfo);

  const { image, name, design, fabric, color, price } = sareeInfo;

  const handleRemoveBtn = () => {
    setIsRemoving(true);
    setTimeout(() => {
      dispatch(removeItem(sareeInfo.id));
    }, 500);
  };

  return (
    <>
      <div
        className={`bg-[#38858c] w-[56%] mb-4 rounded-xl flex ${
          isRemoving ? "animate-fade-out" : ""
        }`}
      >
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
        <div className="ml-auto self-center mr-4">
          <button
            onClick={handleRemoveBtn}
            className="border-2 border-[#9ACBD0] px-4 py-1 rounded-xl text-lg text-white hover:bg-[#9ACBD0] transition-all duration-300"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
