

function MenuModal(props) {



  return ( 
    <div  className=" fixed  h-[500px]  w-[400px] flex z-10 ">
      <dialog  open className=" z-20 w-full h-[500px] justify-center flex  ">
        {props.children} 
      </dialog>
      <div  className=" z-8  w-full h-full bg-black  "></div>
    </div>
  );
}

export default MenuModal;
