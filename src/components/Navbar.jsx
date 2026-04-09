import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const cart = useSelector((state) => state.cart);

  return (
    <div className="flex justify-between bg-slate-900 text-white">
      
      <div className="ml-64">
        <NavLink to="/">
          {/* ✅ FIXED: added alt */}
          <img
            src="https://imgs.search.brave.com/AlrinuonG9RCVxmYtzBqKY6DlH9aie6R10Ho9Hs4ZkY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/aW5zdGFncmFtLXNo/b3AtbG9nby1kZXNp/Z25fMjMtMjE0OTc1/MDcyNC5qcGc_c2Vt/dD1haXNfaW5jb21p/bmcmdz03NDAmcT04/MA"
            className="h-[80px] w-[80px]"
            alt="logo"
          />
        </NavLink>
      </div>

      <div className="font-bold text-xl flex justify-between mt-5 gap-10 mr-64">
        <p className="text-2xl">
          <NavLink to="/">Home</NavLink>
        </p>

        <div className="mt-1 relative">
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>

          {
            cart.length > 0 ? (
              <span className="text-sm font-light absolute -top-1 -right-2 bg-green-400 text-xs hover:cursor-pointer rounded-full w-3 h-4 text-center animate-bounce">
                {cart.length}
              </span>
            ) : (
              <p />
            )
          }
        </div>
      </div>

    </div>
  );
};

export default Navbar;
