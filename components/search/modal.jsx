import { useDispatch } from "react-redux";
import searchSlice from "../store/search-slice";

function Modal(props) {

  const dispatch = useDispatch();

  function handlerOffModal(){
    dispatch(searchSlice.actions.toggle())
  }


  return (
    <div className=" fixed inset-x-0 top-0  h-screen w-full flex z-10 ">
      <dialog open className=" z-20 w-full h-48 justify-center flex items-center ">
        {props.children} 
      </dialog>
      <div onClick={handlerOffModal} className=" z-8 bg-black w-full h-full bg-opacity-60 "></div>
    </div>
  );
}

export default Modal;
