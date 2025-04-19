import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartSaree } from "../utils/constants/cartSlice";

const Sareecard = ({ sareeInfo }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(false);

  const handleDescription = (props) => {
    setDescription(props);
  };

  if (!sareeInfo) return null;
  // console.log(sareeInfo);

  const handleCartBtn = () => {
    dispatch(addCartSaree(sareeInfo));
  }

  const { image, name, design, color, price, fabric } = sareeInfo;

  return (
    <div className="">
    <div className="flex relative w-fit mr-48 ">
      <div
        className="w-60 h-48"
        onMouseEnter={() => handleDescription(true)}
        onMouseLeave={() => handleDescription(false)}
      >
        <img
          className={description? "w-full h-full object-cover rounded-tl-xl cursor-pointer" : "w-full h-full object-cover rounded-t-xl cursor-pointer"}
          alt="saree-img"
          src={image}
        />
      </div>
      <div
        className={`absolute  z-10 left-full top-0 h-full w-60 bg-[#016c9a] text-[#edc059] p-3 rounded-r-xl flex items-center transition-all duration-300 ease-in-out ${
          description
            ? "opacity-100 translate-x-0 visible"
            : "opacity-0 -translate-x-5 invisible"
        }`}
      >
        <ul className="space-y-1 text-left px-3">
          <li className="font-semibold">{name}</li>
          <li>{design}</li>
          <li>{fabric}</li>
          <li>{color}</li>
          <li className="font-bold">₹ {price}</li>
        </ul>
      </div>
    </div>
    <div className="bg-[#016c9a] mb-24 flex gap-3 w-[15rem] py-1 px-2 justify-center rounded-b-xl text-[#edc059] font-semibold">
      <button onClick={()=>handleCartBtn()} className="mr-4">Add Cart</button>
      <button>Buy now</button>
    </div>
    </div>
  );
};

export default Sareecard;
