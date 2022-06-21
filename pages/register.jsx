import React from "react";
import RegisterContent from "../components/register";
import Head from "next/head";
import { wrapper } from "../store/index";

const Register = () => {
  return (
    <>
      <Head>
        <title>Create Account</title>
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
    </>
  );
};

export default Register;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
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
