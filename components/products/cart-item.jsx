import Link from "next/link";
import RemoveIcon from "../icons/remove-icon";


function CartItem(){
    return(
        <>
       
        <div className="flex justify-between items-center my-10">
          <div className="flex items-center  ">
            <img
              className="w-[120px]"
              src="https://mrs-space-cadet.myshopify.com/cdn/shop/files/MSC-Gold-Star-4-Inch.png?v=1693925528&width=300"
              alt="Gold Star"
            />
            <div className=" ml-10">
              <h2 className="font-[650]">Gold Star</h2>
              <p className="opacity-60">$4.00</p>
            </div>
          </div>
          <div></div>
          <div className="flex">
            <input
              className="border-2 text-center mr-6 py-2 px-10"
              type="number"
              min="1"
              max="5"
              defaultValue="1"
            />
            <button><RemoveIcon/></button>
          </div>
          <h2>$4.00</h2>
        </div>
        </>
    )
}

export default CartItem



{
  /* <div className=" relative flex flex-col h-72 justify-center items-center ">
        <h1 className=" text-[55px] font-mono font-semibold tracking-widest">Your cart is empty</h1>
         <Link className="  absolute bottom-4 bg-[#be5078] text-2xl text-center  text-white mt-10 px-10 py-3 rounded-full" href="/">Continue shopping</Link>
      </div> */
}