import Link from "next/link";
import CartIcon from "../icons/cart-icon";
import MenuIcon from "../icons/menu-icon";
import SearchIcon from "../icons/search-icon";
import { useDispatch } from "react-redux";
import searchSlice from "../store/search-slice";
import menuSlice from "../store/menu-slice";

function Navbar() {
  const dispatch = useDispatch();

  function handlerShowSearch() {
    dispatch(searchSlice.actions.toggle());
  }

  function handlerShowMenu() {
    dispatch(menuSlice.actions.toggle());
  }

  return (
    <div className=" flex h-[150px]   justify-between items-center px-14  ">
      <div className="flex w-20 justify-between ">
        <button onClick={handlerShowMenu}>
          <MenuIcon />
        </button>
        <button onClick={handlerShowSearch}>
          <SearchIcon />
        </button>
      </div>
      <Link href="/">
        <img
          src="https://mrs-space-cadet.myshopify.com/cdn/shop/files/MrsSpaceCadet_Black_Logo_RGB.png?v=1682965764&width=165"
          alt=""
        />
      </Link>

      <Link href="/cart" className="w-20 flex justify-end">
        <CartIcon />
      </Link>
    </div>
  );
}

export default Navbar;
