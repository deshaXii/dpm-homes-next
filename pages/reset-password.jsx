import React, { useState } from "react";
import { MdOutlinePassword, MdLock } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import Head from "next/head";
import { wrapper } from "../store/index";
import { useDispatch } from "react-redux";
import { changeMyPassword } from "../store/slices/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

const login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const email = router.query.email;
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleResetPassword = (e) => {
    e.preventDefault();
    const data = {
      email,
      code,
      password,
    };
    if (password === confirmPassword) {
      dispatch(changeMyPassword(data)).then((res) => {
        toast(res.payload, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        router.push("/");
      });
    }
  };
  return (
    <>
      <Head>
      <title>Property in Egypt, Dubai Real Estate - Luxury Aqar</title>
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
                    <form onSubmit={(e) => handleResetPassword(e)}>
                      <div className="form-group">
                        <div className="input-icon">
                          <MdOutlinePassword />
                        </div>
                        <input
                          type="text"
                          name="code"
                          value={code}
                          required
                          onChange={(e) => setCode(e.target.value)}
                          placeholder="ُEnter virification code"
                        />
                      </div>
                      <div className="form-group with-show-password-icon">
                        <div className="input-icon">
                          <MdLock />
                        </div>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group with-show-password-icon">
                        <div className="input-icon">
                          <MdLock />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm Password"
                        />
                        <div className="show-password-icon">
                          {showPassword ? (
                            <AiFillEyeInvisible
                              onClick={() => setShowPassword(false)}
                            />
                          ) : (
                            <AiFillEye onClick={() => setShowPassword(true)} />
                          )}
                        </div>
                      </div>
                      <div className="form-submit-button">
                        <button type="submit" className="btn">
                          Change Password
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
