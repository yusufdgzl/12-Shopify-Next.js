import Footer from "./footer";
import Navbar from "./navbar";

function Layout(props) {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>{props.children}</div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
