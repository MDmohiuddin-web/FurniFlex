import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/pages/Home";
import ErrorPage from "../components/ErrorPage";
import ProductItem from "../components/Product/ProductItem";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import Profile from "../components/Auth/Profile";
import Oderdetails from "../components/pages/Oderdetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },{
          path:'/ProductItem',
          element:<ProductItem></ProductItem>},
          {
            path:'/Login',
            element:<Login></Login>
          },
          {
            path:'/SignUp',
            element:<SignUp></SignUp>
          },
          {
            path:'/Profile',
            element:<Profile></Profile>
          },{
            path:'/Oderdetails',
            element:<Oderdetails></Oderdetails>
          }

       
      ]
    },
  ]);
  export default router