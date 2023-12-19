function ProductDetailCard(props) {
  return (
    <div className="flex justify-center py-10   ">
      <img
        className=" w-[700px] h-[700px]"
        src={props.img}
        alt={props.title}
      />
      <div className=" w-[500px] h-[380px] flex flex-col justify-around ">
        <h1 className=" text-[44px] font-mono font-bold">
          {props.title}
        </h1>
        <h3 className=" text-xl">${props.price} USD</h3>
        <p className="opacity-60">Quantity (4 in cart)</p>
        <input
          className=" border-2 h-12 w-[30%] text-center "
          type="number"
          min="1"
          max="5"
          defaultValue="1"
        />
        <button className="border hover:border-2 h-12 rounded-full border-gray-500">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetailCard;
