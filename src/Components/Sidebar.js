import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isAdmin = localStorage.getItem("isAdmin");

  return (
    <div className="shadow-md w-[18vw] h-screen bg-[#709478]">
      <div className="pt-5 text-lg text-left pl-10">
        <ul className="flex-col ">
          <Link to={"/main"}>
            <li>
              <i class="fa-solid fa-house"></i> Home
            </li>
          </Link>

          <li>
            <i class="fa-solid fa-list"></i> Category
          </li>
          <li>
            <i class="fa-solid fa-clock-rotate-left"></i> Recent viewed
          </li>

          {isAdmin && (
            <Link to={"/addsaree"}>
              <button className="mt-10">
                <i class="fa-solid fa-plus"></i> Add Saree
              </button>
            </Link>
          )}

          <Link to={"/newadd"}>
            <button>New Collection</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
