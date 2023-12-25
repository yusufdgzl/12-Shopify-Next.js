import { useDispatch } from "react-redux";
import RemoveIcon from "../icons/remove-icon";
import cartSlice from "../store/cart-slice";
import MinusIcon from "../icons/minus-icon";
import PlusIcon from "../icons/plus-icon";

function CartItem(props) {
  const dispatch = useDispatch();

  function handlerRemoveItem(e, id) {
    e.preventDefault();
    dispatch(cartSlice.actions.removeItemToCart(id));
  }

  function handlerDecrease(e, id) {
    e.preventDefault();
    dispatch(cartSlice.actions.decreaseItem(id));
  }

  function handlerIncrease(e, id) {
    e.preventDefault();
    dispatch(cartSlice.actions.increaseItem(id));
  }

  return (
    <>
      <div className="flex justify-between items-start my-6">
        <div className="flex items-start  ">
          <img className="w-[120px]" src={props.img} alt="Gold Star" />
          <div className=" ml-10">
            <h2 className="font-[650]">{props.title}</h2>
            <p className="opacity-60">${props.price}</p>
          </div>
        </div>
        <div></div>
        <form className="flex">
          <div className="flex justify-center items-center text-center mx-8 border px-4">
            <button onClick={(e) => handlerDecrease(e, props.id)}>
              <MinusIcon />
            </button>
            <input
              className=" text-center py-2 w-12 appearance-none "
              min="1"
              value={props.amount}
              readOnly
            />
            <button onClick={(e) => handlerIncrease(e, props.id)}>
              <PlusIcon />
            </button>
          </div>

          <button onClick={(e) => handlerRemoveItem(e, props.id)}>
            <RemoveIcon />
          </button>
        </form>
        <h2>${props.totalPrice.toString().substring(0, 6)}</h2>
      </div>
    </>
  );
}

export default CartItem;

{
  /* <div className=" relative flex flex-col h-72 justify-center items-center ">
        <h1 className=" text-[55px] font-mono font-semibold tracking-widest">Your cart is empty</h1>
         <Link className="  absolute bottom-4 bg-[#be5078] text-2xl text-center  text-white mt-10 px-10 py-3 rounded-full" href="/">Continue shopping</Link>
      </div> */
}
