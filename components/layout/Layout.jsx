import Footer from "./footer";
import Navbar from "./navbar";
import MenuDrawer from "@/components/menu/menu-drawer";
import MenuModal from "@/components/menu/menu-modal";
import Modal from "@/components/search/modal";
import SearchBar from "@/components/search/search-bar";
import { useSelector } from "react-redux";

function Layout(props) {
  const showSearch = useSelector((state) => state.search.searchIsVisible);
  const showMenu = useSelector((state) => state.menu.menuIsVisible);

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        {showSearch && (
          <Modal>
            <SearchBar />
          </Modal>
        )}
        {showMenu && (
          <MenuModal>
            <MenuDrawer />
          </MenuModal>
        )}
        <div>{props.children}</div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
