function MenuDrawer() {
  return (
    <div className=" flex flex-col w-[400px] h-[400px]  ">
      <ul className=" leading-[56px] text-xl">
        <li className="hover:bg-gray-100 px-6 ">Shop</li>
        <li className="hover:bg-gray-100 px-6 ">My Story</li>
        <li className="hover:bg-gray-100 px-6 ">BLog</li>
        <li className="hover:bg-gray-100 px-6 ">PodCast</li>
        <li className="hover:bg-gray-100 px-6 ">Press</li>
        <li className="hover:bg-gray-100 px-6 ">Work With Me</li>
        <li className="hover:bg-gray-100 px-6 ">Contact</li>
      </ul>
    </div>
  );
}

export default MenuDrawer;
