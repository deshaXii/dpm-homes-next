import React, { useEffect } from "react";
import LoginContent from "../components/login";
import Head from "next/head";
import { wrapper } from "../store/index";
import { useRouter } from "next/router";

const login = () => {
  const {locale} = useRouter();
  return (
    <>
      <Head>
       <title>
          Luxury Aqar | 
          {locale === "en" ? " Login" : " تسجيل الدخول"}
        </title>
      </Head>
      <div
        className="login-page"
        style={{ backgroundImage: "url(/img/login-bg.jpg)" }}
      >
        <div className="d-table">
          <div className="d-cell">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <LoginContent from="page" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ res }) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
      );
      let user = store.getState().auth.user;
      if (user) {
        return {
          redirect: {
            destination: "/",
          },
          props: {},
        };
      }
      return {
        props: {},
      };
    }
);
