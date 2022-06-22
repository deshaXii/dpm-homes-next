import React from "react";
import CopyRight from "../components/Global/CopyRight";
import Cursor from "../components/Global/Cursor";
import ScrollToTop from "../components/Global/ScrollToTop";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/auth";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const  AppNavbar = dynamic(() => import("../components/Global/AppHeader"));
const  AppFooter = dynamic(() => import("../components/Global/AppFooter"));


function getDirection(locale) {
  if (locale === "ar") {
    return "rtl";
  }
  return "ltr";
}

const Default = ({ children }) => {
  const { locale } = useRouter();
  const user = useSelector(selectUser);
  return (
    <div
      className={`${getDirection(locale)}`}
      dir={getDirection(locale)}
      onClick={() =>
        // To close dropdown menu when click outside of it
        document.querySelector(".popup") &&
        document.querySelector(".popup").classList.remove("show")
      }
    >
      <AppNavbar user={user} />
      {children}
      <AppFooter />
      <CopyRight />
      <ScrollToTop />
      <Cursor />
    </div>
  );
};

export default Default;
