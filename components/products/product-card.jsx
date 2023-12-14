function ProductCart(props) {
  return (
    <div className=" leading-[30px]    ">
      <div className=" overflow-hidden ">
        <img
          className=" hover:scale-105 transition-all duration-500 "
          src={props.img}
          alt={props.title}
        />
      </div>

      <h2 className="font-serif mt-4">{props.title}</h2>
      <h2 className=" text-2xl font-[380]">${props.price} USD</h2>
    </div>
  );
}

export default ProductCart;
