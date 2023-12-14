import Link from "next/link";

function Cart() {
  return (
    <>
      <div className=" relative flex flex-col h-72 justify-center items-center ">
        <h1 className=" text-[55px] font-mono font-semibold tracking-widest">Your cart is empty</h1>
         <Link className="  absolute bottom-4 bg-[#be5078] text-2xl text-center  text-white mt-10 px-10 py-3 rounded-full" href="/">Continue shopping</Link>
      </div>
    </>
  );
}

export default Cart;
