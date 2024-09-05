import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthProvider";
import profilepic from "../assets/profile.png";
import toast from "react-hot-toast";

const Navigation = () => {
  const { logOut, user } = useContext(AuthContext);
  const links = (
    <>
      <NavLink
        to="/"
        className="text-black hover:text-white hover:bg-black p-2

   rounded duration-300"
      >
        Home
      </NavLink>
      <NavLink
        to="/ProductItem"
        className="text-black hover:text-white hover:bg-black p-2

   rounded duration-300"
      >
        Products
      </NavLink>
      <NavLink
        to="/Categories"
        className="text-black hover:text-white hover:bg-black p-2

   rounded duration-300"
      >
        Categories
      </NavLink>
      <NavLink
        to="/Custom"
        className="text-black hover:text-white hover:bg-black p-2

   rounded duration-300"
      >
        Custom
      </NavLink>
      <NavLink
        to="/Blog"
        className="text-black hover:text-white hover:bg-black p-2
  
  rounded duration-300"
      >
        Blog
      </NavLink>
    </>
  );
  const logout = () => {
    logOut()
      .then(() => {
        toast.success("sign out success full");
        // window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        toast.error("User logOut Unsuccessfully");
        // alert("User logOut successfully");
      });
  };

  return (
    <div className="navbar  text-white  bg-opacity-30 m-auto  md:w-[90%] pt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" className="md:w-[100px] " />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{links}</ul>
      </div>

      <div className="navbar-end">
        {/*  */}
        <div className="flex gap-5 text-black">
          <div className="dropdown dropdown-end">
            <Link
              to=""
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <LiaShoppingBagSolid className="text-2xl"></LiaShoppingBagSolid>
                {/* <span className="badge badge-sm indicator-item text-white bg-yellow-500 border-none font-bold">
                  {`+${Cart?.length || 0}`}
                </span> */}
              </div>
            </Link>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  title={user?.displayName}
                  src={user?.photoURL || profilepic}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user?.email ? (
                <>
                  <li className="hover:text-my_color-400">
                    <NavLink to="/Profile">Profile</NavLink>
                  </li>
                  <li>
                    <Link onClick={logout}>Logout</Link>
                  </li>
                </>
              ) : (
                <li className="hover:text-my_color-400">
                  <NavLink to="/Login">Log in</NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
