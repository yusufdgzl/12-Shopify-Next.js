import { Provider } from "react-redux";
import Layout from "/components/layout/Layout";
import "@/styles/globals.css";
import store from "@/components/store";

export default function App({ Component, pageProps }) {
  return (
    
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    
  );
}
