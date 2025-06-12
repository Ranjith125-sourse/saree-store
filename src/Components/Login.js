import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const adminUser = { userName: "admin", password: "admin123" };

  const handleLogin = () => {
    if (userName === adminUser.userName && password === adminUser.password) {
      localStorage.setItem("isAdmin", "true");
      navigate("/main");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="border-2 w-1/3 mt-10 bg-blue-400 p-5 flex justify-center rounded-xl">
        <form className="flex flex-col text-left w-1/2 ">
          <label className="text-lg">User name</label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border rounded-lg p-1"
          />
          <label className="text-lg">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg p-1"
          />
          <button
            onClick={handleLogin}
            className="bg-green-400 rounded-xl mt-4 py-1 px-2 w-1/2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
