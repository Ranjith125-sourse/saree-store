import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewSaree } from "../utils/constants/newSareeSlice";
import { useNavigate } from "react-router-dom";

const AddSaree = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newSaree, setNewSaree] = useState({});
  const sareeArray = useSelector((store) => store?.newSaree?.newSaree);
  const [prevLength, setPrevLength] = useState(sareeArray.length);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const name = useRef(null);
  const design = useRef(null);
  const fabric = useRef(null);
  const color = useRef(null);
  const price = useRef(null);
  const imageRef = useRef(null);

  const handleFormSubmit = () => {
    const newSareeData = {
      name: name?.current?.value,
      design: design?.current?.value,
      fabric: fabric?.current?.value,
      color: color?.current?.value,
      price: price?.current?.value,
      image: preview,
    };
    setNewSaree(newSareeData);
    setPrevLength(sareeArray.length);
    dispatch(addNewSaree(newSareeData));
  };

  useEffect(() => {
    if (sareeArray.length > prevLength) {
      navigate("/newadd");
    }
  }, [navigate, sareeArray.length, prevLength]);

  const handleImageChange = (e) => {
    const file = e?.target?.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  //   console.log(newSaree);

  return (
    <div className="flex justify-center mt-10">
      <div className="w-1/2 bg-[#33838d] p-10 flex-col justify-items-center rounded-lg">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col text-left w-1/2"
        >
          <label className="text-[#fec76f] font-semibold text-lg ">
            Saree name
          </label>

          <input
            ref={name}
            className="border rounded-md px-2 py-1 focus:ring-2 focus:ring-[#fec76f] outline-none"
          />
          <label className="text-[#fec76f] font-semibold text-lg">Design</label>
          <input
            ref={design}
            className="border  rounded-md px-2 py-1 focus:ring-2 focus:ring-[#fec76f] outline-none"
          />
          <label className="text-[#fec76f] font-semibold text-lg">Fabric</label>
          <input
            ref={fabric}
            className="border  rounded-md px-2 py-1 focus:ring-2 focus:ring-[#fec76f] outline-none"
          />
          <label className="text-[#fec76f] font-semibold text-lg">Color</label>
          <input
            ref={color}
            className="border  rounded-md px-2 py-1 focus:ring-2 focus:ring-[#fec76f] outline-none"
          />
          <label className="text-[#fec76f] font-semibold text-lg">Price</label>
          <input
            ref={price}
            className="border  rounded-md px-2 py-1 focus:ring-2 focus:ring-[#fec76f] outline-none"
          />
          <label className="text-[#fec76f] font-semibold text-lg">
            Upload image
          </label>
          <input
            type="file"
            ref={imageRef}
            accept="image/*"
            onChange={handleImageChange}
          />
          {preview && (
            <img
              src={preview}
              alt="Saree Preview"
              className="mt-3 w-40 h-40 object-cover rounded-md"
            />
          )}
          <button
            onClick={() => handleFormSubmit()}
            className="mt-3 border font-semibold text-white px-2 py-1 rounded-md transition-all duration-300 ease-in-out hover:bg-[#fec76f] hover:text-[#33838c]"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSaree;
