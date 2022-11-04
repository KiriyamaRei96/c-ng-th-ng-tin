import "../styles/globals.scss";
import { store } from "../ReduxStore/store";
import AppHeader from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { Provider } from "react-redux";
import { wrapper } from "../ReduxStore/store";
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Provider store={store}> */}
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
        integrity='sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=='
        crossOrigin='anonymous'
        referrerPolicy='no-referrer'
      />

      <AppHeader />
      <Component {...pageProps} />
      <Footer />
      {/* </Provider> */}
    </>
  );
}

export default wrapper.withRedux(MyApp);
