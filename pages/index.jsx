import Section from "@/components/layout/section";
import store from "@/components/store";
import { Provider } from "react-redux";

function HomePage() {
  return (
    <>
    <Provider store={store}>
      <Section />
      </Provider>
    </>
  );
}

export default HomePage;
