import "typeface-raleway";
import "typeface-roboto";
import "../styles/globals.css";
import Provider from "../components/context";
function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
