import Prodcuts from "../products/products";

function Section() {
  return (
    <div className="flex flex-col  md:w-[76%] mx-auto items-center justify-center ">
      <div className="h-[300px] md:h-[500px]  w-full overflow-hidden">
        <img
          src="https://mrs-space-cadet.myshopify.com/cdn/shop/files/MSC-Hero-Images-Working-File-3_41982f15-1902-45a8-9ccc-f9d92378d289.jpg?v=1701455507&width=2000"
          alt=""
          className=" w-[90%] mx-auto md:w-full h-full object-cover "
        />
      </div>
      <Prodcuts />
    </div>
  );
}

export default Section;
