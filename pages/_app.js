import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import scrollToTop from "../common/scrollToTop";
import { wrapper } from "../store/index";
import { ToastContainer } from "react-toastify";
import { parseCookies } from "../common/parseCookies";
import { getUserInfo } from "../store/slices/auth";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import "../styles/globals.css";
import "../styles/arabic-style.css";
import "../styles/responsive.css";

import ar from "../lang/ar.json";
import en from "../lang/en.json";

const messages = {
  ar,
  en,
};

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  useEffect(() => {
    let progressBar = document.querySelector(".progress-wrap");
    if (progressBar) {
      scrollToTop();
    }
  }, []);
  return (
    <>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Component {...pageProps} />
      </IntlProvider>
      <ToastContainer />
    </>
  );
}

MyApp.getInitialProps = wrapper.getInitialPageProps(
  (store) =>
    async ({ ctx }) => {
      if (ctx.req) {
        if (ctx.req.cookies.hasOwnProperty("userToken")) {
          const cookies = parseCookies(ctx.req);
          const token = cookies.userToken;
          await store.dispatch(getUserInfo(token));
          return {};
        }
      }
    }
);

export default wrapper.withRedux(MyApp);
