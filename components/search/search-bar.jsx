import { useDispatch } from "react-redux";
import OffIcon from "../icons/off-icon";
import SearchIcon from "../icons/search-icon";
import searchSlice from "../store/search-slice";

function SearchBar() {

    const dispatch = useDispatch();

    function handlerOffSearch(){
        dispatch(searchSlice.actions.toggle())
    }

  return (
    <div className=" flex justify-center items-center">
      <div className="relative ">
        <input
          className="  border-2 w-[800px] h-12 px-4 hover:shadow-[0_0_1px_0_]"
          placeholder="Search"
          type="text"
        />
        <button  className=" absolute right-3 inset-y-0">
          <SearchIcon />
        </button>
      </div>
      <button  onClick={handlerOffSearch} className=" ml-2">
        <OffIcon />
      </button>
    </div>
  );
}

export default SearchBar;
