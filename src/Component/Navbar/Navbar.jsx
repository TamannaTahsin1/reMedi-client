import { GoPerson } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import logo from '../../assets/img/logo.png'
const Navbar = () => {
    return (
        <div className="navbar overflow-hidden bg-[#45bdaa]">
        <div className="navbar-start">
            <img src={logo} className='w-20 h-18' alt="" />
          <a className="btn btn-ghost text-white text-3xl font-bold">ReMedi</a>
        </div>
        <div className="navbar-center flex lg:gap-2 mr-8">
          <div className="relative  shadow rounded-md">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FaSearch className="text-orange-400" />
            </span>
            <input
              type="text"
              placeholder="     Search Audiobook"
              className="input w-48 lg:w-96"
            />
          </div>
          <div className="dropdown max-w-lg">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-white font-bold w-32 border-none shadow mr-8"
            >
              MENU
              <span className="ml-6 text-orange-400">
                <FaAngleDown size={20} />
              </span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24 lg:w-52"
            >
              <li className="hover:text-orange-500 font-semibold">
                <a>Home</a>
              </li>
              <li className="hover:text-orange-500 font-semibold">
                <a>Details</a>
              </li>
              <li className="hover:text-orange-500 font-semibold">
                <a>Category</a>
              </li>
              <li className="hover:text-orange-500 font-semibold">
                <a>My Favorites</a>
              </li>
              <li className="hover:text-orange-500 font-semibold">
                <a>Profile</a>
              </li>
              <li className="hover:text-orange-500 font-semibold">
                <a>Log In/Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <p className="bg-orange-600 rounded-full p-3 text-white text-xl font-bold">
            <GoPerson />
          </p>
        </div>
      </div>
    );
};

export default Navbar;