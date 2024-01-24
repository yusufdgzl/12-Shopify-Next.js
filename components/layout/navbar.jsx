import Link from "next/link";
import CartIcon from "../icons/cart-icon";
import MenuIcon from "../icons/menu-icon";
import SearchIcon from "../icons/search-icon";
import { useDispatch, useSelector } from "react-redux";
import searchSlice from "../store/search-slice";
import menuSlice from "../store/menu-slice";
import OffIcon from "../icons/off-icon";

function Navbar() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.menuIsVisible);
  const items = useSelector((state) => state.cart.items);

  function handlerShowSearch() {
    dispatch(searchSlice.actions.toggle());
  }

  function handlerShowMenu() {
    dispatch(menuSlice.actions.toggle());
  }

  return (
    <div className="  w-full flex h-[150px]  justify-between items-center px-4 md:px-14  ">
      <div className="flex w-20 justify-between ">
        <button onClick={handlerShowMenu}>
          {!menu ? <MenuIcon /> : <OffIcon />}
        </button>
        <button onClick={handlerShowSearch}>
          <SearchIcon />
        </button>
      </div>
      <Link href="/">
        <img
          src="https://mrs-space-cadet.myshopify.com/cdn/shop/files/MrsSpaceCadet_Black_Logo_RGB.png?v=1682965764&width=165"
          className=" md:w-[150px] w-[130px]"
        />
      </Link>
      <div>
        <Link href="/cart" className="w-20 flex justify-end">
          <CartIcon />
          <span
            className={
              items.length > 0
                ? `animate-bounce absolute bg-pink-400 flex h-4 w-4 items-center justify-center text-sm text-white rounded-full`
                : ""
            }
          >
            {items.length === 0 ? "" : items.length}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
