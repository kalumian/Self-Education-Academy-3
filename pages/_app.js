import "../styles/globals.css";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// own css files here.

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
