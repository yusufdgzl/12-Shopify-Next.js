import RemoveIcon from "../icons/remove-icon";

function CartItem(props) {
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
        <div className="flex">
          <input
            className="border-2 text-center mr-6 py-2 px-10"
            type="number"
            min="1"
            defaultValue={props.amount}
            
          />
          <button>
            <RemoveIcon />
          </button>
        </div>
        <h2>${props.totalPrice.toString().substring(0,6)}</h2>
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
