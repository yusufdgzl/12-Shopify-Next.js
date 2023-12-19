import CartItem from "@/components/products/cart-item";
import Link from "next/link";

function Cart() {
  return (
    <>
      <div className="flex flex-col w-[76%] mx-auto justify-center  ">
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
        <CartItem />
      </div>
    </>
  );
}

export default Cart;
