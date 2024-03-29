<div className="navbar overflow-hidden bg-[#45bdaa]">
  <div className="navbar-start">
    <div className=" dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2 z-10">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <img src={logo} className="w-20 h-14" alt="" />
    <a className="  text-2xl font-bold text-white">ReMedi</a>
  </div>
  <div className="navbar-center  hidden lg:flex">
    {/* search bar */}
  <div className="relative  shadow rounded-md">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <FaSearch className="text-[#45bdaa]" />
        </span>
        <input
          type="text"
          placeholder="     Search Medicine"
          className="input w-48 lg:w-96"
        />
      </div>
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <details>
          <summary>Categories</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>About Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
   <button className="btn bg-[#45bdaa] border-none shadow-2xl hover:bg-white">
   <FaCartPlus className="text-xl text-white"/>
  <div className="badge bg-red-500 border-none">+0</div>
</button>
  </div>
</div>