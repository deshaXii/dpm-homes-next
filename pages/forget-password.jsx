import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import Head from "next/head";
import { wrapper } from "../store/index";
import { useDispatch } from "react-redux";
import { sendForgetPasswordCode } from "../store/slices/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleForgetPassword = (e) => {
    e.preventDefault();
    dispatch(sendForgetPasswordCode(email)).then((res) => {
      if (res.payload.success) {
        toast.success(res.payload.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        router.push({
          pathname: "/reset-password",
          query: { email },
        });
      } else {
        toast.error(res.payload.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    });
  };
  return (
    <>
      <Head>
        
          Luxury Aqar |
          {router.locale === "en" ? " Forget My Password" : " نسيت كلمة المرور"}
        </title>
      </Head>
      <div
        className="login-page login-area login-page-content"
        style={{ backgroundImage: "url(/img/login-bg.jpg)" }}
      >
        <div className="d-table">
          <div className="d-cell">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <section className="forget-password">
                    <form onSubmit={(e) => handleForgetPassword(e)}>
                      <div className="form-group">
                        <div className="input-icon">
                          <MdEmail />
                        </div>
                        <input
                          type="email"
                          value={email}
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="ُEnter your email address"
                        />
                      </div>
                      <div className="form-submit-button">
                        <button type="submit" className="btn">
                          Send Verification Code to Email
                        </button>
                      </div>
                    </form>
                  </section>
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
