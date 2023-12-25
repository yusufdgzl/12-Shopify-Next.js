import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../store/cart-slice";

function ProductDetailCard(props) {
  const items = useSelector((state) => state.cart.items);

  const existingItem = items.find((item) => item.id === props.id);

  const dispatch = useDispatch();

  const amountRef = useRef();

  function handlerAddToCart(e) {
    e.preventDefault();
    const amountValue = amountRef.current.value;
    const numberAmountValue = +amountValue;

    dispatch(
      cartSlice.actions.addItemToCart({
        title: props.title,
        img: props.img,
        price: props.price,
        amount: numberAmountValue,
        id: props.id,
      })
    );
  }

  return (
    <div className="flex justify-center py-10   ">
      <img className=" w-[700px] h-[700px]" src={props.img} alt={props.title} />
      <form
        onSubmit={handlerAddToCart}
        className=" w-[500px] h-[380px] flex flex-col justify-around "
      >
        <h1 className=" text-[44px] font-mono font-bold">{props.title}</h1>
        <h3 className=" text-xl">${props.price} USD</h3>
        <p className="opacity-60">
          Quantity ({existingItem?.amount || 0} in cart)
        </p>
        <input
          className=" border-2 h-12 w-[30%] text-center "
          type="number"
          min="1"
          max="5"
          defaultValue="1"
          ref={amountRef}
        />
        <button className="border hover:border-2 h-12 rounded-full border-gray-500">
          Add to cart
        </button>
      </form>
    </div>
  );
}

export default ProductDetailCard;
