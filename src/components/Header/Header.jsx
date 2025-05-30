import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contextApi/AuthProvider";
import { useContext } from "react";

const Header = () => {

  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('User logged out successfully');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/sign-in">Sign In</NavLink>
            </li>
            <li>
              <NavLink to="/sign-up">Sign Up</NavLink>
            </li>
          </ul>
        </div>
        <span className="btn btn-ghost text-xl text-yellow-500">Firebase</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/sign-in">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/orders">Orders</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <span className="btn">
          {user? `${user?.email}` : 'sign in'}
        </span>
        {user?.email && (
          <button
            onClick={handleLogOut}
            className="btn btn-primary ml-2"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
