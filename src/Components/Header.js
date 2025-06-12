import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Silks.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const showPopup = useSelector((store) => store?.app?.showPopup);
  console.log(showPopup);
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store?.cart?.cartItems || []);
  const cartCount = cartItems?.length;
  const [isAdmin, setAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setAdmin(false);
  };

  useEffect(() => {
    setAdmin(localStorage.getItem("isAdmin") === "true");
    navigate("/main");
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#e1b44f] to-[#0075a0] flex justify-between shadow-xl ">
      <div className="w-32 ">
        <Link to={"/main"}>
          <img
            className="rounded-full m-2 ml-3 transition-all shadow-md duration-300 hover:shadow-white"
            alt="logo"
            src={logo}
          />
        </Link>
      </div>
      { showPopup &&
        <div className="w-80 h-10 bg-white mt-10 pt-2 rounded-xl bg-opacity-40 fixed mx-[40%] animate-fade-in">
          {cartCount + " items added to your cart"}
        </div>
      }
      <div className="mr-5 mt-12">
        <Link to={"/cart"}>
          <button className="mr-2 border-2 px-5 py-1 text-xl bg-gradient-to-tl transition-all duration-300 from-blue-950 to-blue-700 text-white border-amber-600 shadow-md hover:shadow-white rounded-xl focus:ring-4 focus:ring-amber-500 focus:ring-opacity-50">
            <i class="fa-solid fa-cart-shopping fa-sm"></i> Cart{" "}
            {cartCount ? `- ${cartCount}` : null}
          </button>
        </Link>
        <Link to={"/login"}>
          <button className="mr-2 border-2 px-5 py-1 text-xl bg-gradient-to-tl transition-all duration-300 from-blue-950 to-blue-700 text-white border-amber-600 shadow-md hover:shadow-white rounded-xl focus:ring-4 focus:ring-amber-500 focus:ring-opacity-50">
            <i class="fa-solid fa-right-to-bracket fa-sm"></i> LogIn
          </button>
        </Link>
        {isAdmin && (
          <button
            onClick={handleLogout}
            className="mr-2 border-2 px-5 py-1 text-xl bg-gradient-to-tl transition-all duration-300 from-blue-950 to-blue-700 text-white border-amber-600 shadow-md hover:shadow-white rounded-xl focus:ring-4 focus:ring-amber-500 focus:ring-opacity-50"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
