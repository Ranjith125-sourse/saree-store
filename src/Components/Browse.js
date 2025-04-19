import React, { useEffect, useState } from "react";
import { dataSet } from "../utils/dataset";
import Sareecontainer from "./Sareecontainer";

const Browse = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataSet);
  }, []);

  return (
    <div className="w-screen p-10 bg-[#beaa5c]">
      <div className="">
        <Sareecontainer sareeInfo={data} />
      </div>
    </div>
  );
  
  
};

export default Browse;
