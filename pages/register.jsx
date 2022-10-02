import React, {useEffect} from "react";
import RegisterContent from "../components/register";
import Head from "next/head";
import { wrapper } from "../store/index";
 import { useRouter } from "next/router";
import Default from "../layouts/default";

const Register = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);
  const {locale} = useRouter();
  return (
    <Default>
      <Head>
      <title>Property in Egypt, Dubai Real Estate - Luxury Aqar</title>
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
