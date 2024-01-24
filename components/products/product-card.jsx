import Link from "next/link";


function ProductCard(props) {

  function handlerAddToDetailCard(){
   
  }


  return (
    <div onClick={handlerAddToDetailCard} className=" leading-[30px]    ">
      <div className=" overflow-hidden ">
        <Link href={`/products/${props.id}`}>
        <img
          className=" hover:scale-105 transition-all duration-500 "
          src={props.img}
          alt={props.title}
        />
        </Link>
       
      </div>

      <h2 className="font-serif mt-4">{props.title}</h2>
      <h2 className=" text-2xl font-[380]">${props.price} USD</h2>
    </div>
  );
}

export default ProductCard;
