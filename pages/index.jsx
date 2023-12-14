import Section from "@/components/layout/section";
import MenuDrawer from "@/components/menu/menu-drawer";
import MenuModal from "@/components/menu/menu-modal";
import Modal from "@/components/search/modal";
import SearchBar from "@/components/search/search-bar";
import { useSelector } from "react-redux";

function HomePage() {
  const showSearch = useSelector((state) => state.search.searchIsVisible);
  const showMenu = useSelector((state)=> state.menu.menuIsVisible)

  return (
    <>
      {showSearch && (
        <Modal>
          <SearchBar />
        </Modal>
      )}
     { showMenu && <MenuModal>
        <MenuDrawer />
      </MenuModal>}

      <Section />
    </>
  );
}

export default HomePage;
