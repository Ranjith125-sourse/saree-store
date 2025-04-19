import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Login from "../src/Components/Login";
import Body from "./Components/Body";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/constants/appStore";
import AddSaree from "./Components/AddSaree";
import Newadd from "./Components/Newadd";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/addsaree",
        element: <AddSaree />,
      },
      {
        path: "/newadd",
        element: <Newadd />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
