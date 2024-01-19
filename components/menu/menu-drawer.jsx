import Link from "next/link";

function MenuDrawer() {
  return (
    <div className=" flex flex-col w-[400px] h-[400px]  ">
      <ul className=" leading-[56px] text-xl flex flex-col">
        <Link href="/products" className="hover:bg-gray-100 px-6 ">Shop</Link>
        <Link href="/" className="hover:bg-gray-100 opacity-30 px-6 ">My Story</Link>
        <Link href="/" className="hover:bg-gray-100 opacity-30 px-6 ">BLog</Link>
        <Link href="/" className="hover:bg-gray-100 opacity-30 px-6 ">PodCast</Link>
        <Link href="/" className="hover:bg-gray-100 opacity-30 px-6 ">Press</Link>
        <Link href="/" className="hover:bg-gray-100 opacity-30 px-6 ">Work With Me</Link>
        <Link href="/contact" className="hover:bg-gray-100 px-6 ">Contact</Link>
      </ul>
    </div>
  );
}

export default MenuDrawer;
