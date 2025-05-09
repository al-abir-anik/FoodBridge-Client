import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => navigate("/logIn"))
      .catch((error) => console.log("ERROR", error.message));
  };


    // State to manage the current theme
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load the theme from localStorage on component mount
    useEffect(() => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark") {
        setIsDarkMode(true);
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        setIsDarkMode(false);
        document.documentElement.setAttribute("data-theme", "light");
      }
    }, []);
  
    // Toggle the theme and save it to localStorage
    const toggleTheme = () => {
      const newTheme = isDarkMode ? "light" : "dark";
      setIsDarkMode(!isDarkMode);
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    };
  

  return (
    <nav className="navbar justify-around h-20 bg-base-200 fixed z-10">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          FoodBridge
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2 text-[13px] font-semibold text-[#2D2A6E]">
          <li>
            <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={"/availableFoods"}>AVAILABLE FOODS</NavLink>
          </li>
          {user && (
            <li>
              <NavLink to={"/addFood"}>ADD FOOD</NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink to={"/manageMyFoods"}>MANAGE MY FOODS</NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink to={"/myFoodRequest"}>MY FOOD REQUEST</NavLink>
            </li>
          )}
          <li>
            <NavLink to={"/contactUs"}>CONTACT US</NavLink>
          </li>
          {user && (
            <li>
              <Link to={"/dashboard"}>DASHBOARD</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="space-x-5">
        {user ? (
          <button onClick={handleSignOut} className="btn">
            LOG OUT
          </button>
        ) : (
          <div className="space-x-6">
            <Link to={"/logIn"}>
              <button className="btn">LOG IN</button>
            </Link>
            <Link to={"/signUp"}>
              <button className="btn">SIGN UP</button>
            </Link>
          </div>
        )}

         {/* Theme toggle button */}
         <button onClick={toggleTheme}>
          {isDarkMode ?  <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg> : <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>}
        </button>

        {user && (
          <div className="dropdown dropdown-end">
            <div className="btn btn-ghost btn-circle avatar relative group">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>

              {user && (
                <span className="absolute top-1/2 -translate-y-1/2 left-full ml-2 w-max bg-gray-800 text-white text-sm font-semibold py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {user?.displayName}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
