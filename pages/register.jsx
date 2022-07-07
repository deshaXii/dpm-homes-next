import React from "react";
import RegisterContent from "../components/register";
import Head from "next/head";
import { wrapper } from "../store/index";
 import { useRouter } from "next/router";
import Default from "../layouts/default";

const Register = () => {
  const {locale} = useRouter();
  return (
    <Default>
      <Head>
        <title>
          Luxury Aqar | {locale === "en" ? " Create Account" : " إنشاء حساب "}
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
                  <RegisterContent from="page" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
};

export default Register;

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
