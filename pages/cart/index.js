import CartItem from "@/components/products/cart-item";
import Link from "next/link";
import { useSelector } from "react-redux";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <>
      <div className="flex flex-col w-[76%] mx-auto justify-center border-b  ">
        <div className="flex justify-between items-center">
          <h1 className="text-[50px] font-semibold">Your cart</h1>
          <Link className=" border-b border-black " href="/products">
            Continue shopping
          </Link>
        </div>
        <div className="flex justify-between text-[10px] opacity-60 border-b py-4 ">
          <p>PRODUCT</p>
          <p> </p>
          <p>QUANTITY</p>
          <p>TOTAL</p>
        </div>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="flex justify-around my-10">
        <h2 className=" text-2xl">Total Price : ${totalPrice}</h2>
        <button className=" border-2 border-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white">
          Approve
        </button>
      </div>
    </>
  );
}

export default Cart;
