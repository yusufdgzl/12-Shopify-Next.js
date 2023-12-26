import { useDispatch, useSelector } from "react-redux";
import OffIcon from "../icons/off-icon";
import SearchIcon from "../icons/search-icon";
import searchSlice from "../store/search-slice";


function SearchBar() {
  const dispatch = useDispatch();
   const searchTerm = useSelector(state=> state.search.searchTerm)

  function handlerOffSearch() {
    dispatch(searchSlice.actions.toggle());
  }

  function handleSearch(e){
    dispatch(searchSlice.actions.setSearchTerm(e.target.value))
  }

  return (
    <div className=" flex justify-center items-center">
      <div className="relative ">
        <input
          className="  border-2 w-[800px] h-12 px-4 hover:shadow-[0_0_1px_0_]"
          placeholder="Search"
          type="text"
          onChange={handleSearch}
          value={searchTerm}
        />
        <button className=" absolute right-3 inset-y-0">
          <SearchIcon />
        </button>
      </div>
      <button onClick={handlerOffSearch} className=" ml-2">
        <OffIcon />
      </button>
    </div>
  );
}

export default SearchBar;
