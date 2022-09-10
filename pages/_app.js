// next
import Router from "next/router";

// styles
import "../styles/css/nucleo-icons.css";
import "../styles/scss/blk-design-system-react.scss";
import "../styles/demo/demo.css";

// nprogress
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

// context
import { AuthWrapper } from "../context/authState";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <AuthWrapper>
      <Component {...pageProps} />
    </AuthWrapper>
  );
}

export default MyApp;
