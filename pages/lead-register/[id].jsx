import Link from "next/link";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { wrapper } from "../../store";
import API from "../../store/api";
const LeadRegister = ({ data }) => {
  useEffect(() => {
    document.querySelector(".feedback-wrap").style.display = "none";
    document.querySelector(".notification-wrap").style.display = "none";
  });
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [agree, setAgree] = useState(false);
  return (
    <>
      <style jsx>{`
        @import url(https://fonts.googleapis.com/css?family=Roboto:300);
        .login-page {
          padding: 12% 0 0;
          height: 100vh;
          margin: auto;
        }
        .form {
          position: relative;
          z-index: 1;
          background: #ffffff;
          max-width: 360px;
          margin: 0 auto 100px;
          padding: 15px;
          text-align: center;
          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2),
            0 5px 5px 0 rgba(0, 0, 0, 0.24);
        }
        .form input {
          font-family: "Roboto", sans-serif;
          outline: 0;
          background: #f2f2f2;
          width: 100%;
          border: 0;
          margin: 0 0 15px;
          padding: 15px;
          box-sizing: border-box;
          font-size: 14px;
          text-transform: capitalize;
        }
        .form button {
          font-family: "Roboto", sans-serif;
          text-transform: uppercase;
          outline: 0;
          background: #4caf50;
          width: 100%;
          border: 0;
          padding: 15px;
          color: #ffffff;
          font-size: 14px;
          -webkit-transition: all 0.3 ease;
          transition: all 0.3 ease;
          cursor: pointer;
        }
        .form button:hover,
        .form button:active,
        .form button:focus {
          background: #43a047;
        }
        .form .message {
          margin: 15px 0 0;
          color: #b3b3b3;
          font-size: 12px;
        }
        .form .message a {
          color: #4caf50;
          text-decoration: none;
        }
        .container {
          position: relative;
          z-index: 1;
          max-width: 300px;
          margin: 0 auto;
        }
        .container:before,
        .container:after {
          content: "";
          display: block;
          clear: both;
        }
        .container .info {
          margin: 50px auto;
          text-align: center;
        }
        .container .info h1 {
          margin: 0 0 15px;
          padding: 0;
          font-size: 36px;
          font-weight: 300;
          color: #1a1a1a;
        }
        .container .info span {
          color: #4d4d4d;
          font-size: 12px;
        }
        .container .info span a {
          color: #000000;
          text-decoration: none;
        }
        .container .info span .fa {
          color: #ef3b3a;
        }
        body {
          background: #76b852;
        }
        .lead-register-title {
          position: relative;
          z-index: 10;
          color: #fff;
          min-width: 500px;
          margin: 0 auto;
          margin-bottom: 30px;
          font-size: 25px;
          font-weight: bold;
          text-align: center;
          line-height: 1.8;
        }

        @media (max-width: 760px) {
          .lead-register-title {
            min-width: 40%;
          }
        }
      `}</style>
      <div
        className="divx"
        style={{
          backgroundImage: "url(/img/lead-bg.jfif)",
          backgroundSize: "cover",
        }}
      >
        <div className="login-page">
          <h1 className="lead-register-title">{data.title}</h1>
          <div className="form">
            <form
              className="register-form"
              onSubmit={(e) => {
                e.preventDefault();
                if (agree) {
                  API.post("/submit-form", {
                    name,
                    phone,
                    email,
                    title_id: data.id,
                  }).then((res) => {
                    toast.success(res.data.message, {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                    });
                  });
                } else {
                  toast.error(
                    "please read and agree our terms and conditions",
                    {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                    }
                  );
                }
              }}
            >
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
              />
              <PhoneInput
                country={"ae"}
                required={true}
                placeholder="Phone Number"
                onlyCountries={["ae", "eg", "sa", "kw", "bh", "om", "qa", "jo"]}
                value={phone}
                preferredCountries={["ae", "eg", "sa"]}
                onChange={(value) => setPhone(value)}
              />
              <input
                type="email"
                required
                placeholder="email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="agree-box">
                <div className="toggle-button-cover">
                  <div className="button-cover">
                    <div className="button b2" id="button-18">
                      <input
                        id="agree"
                        type="checkbox"
                        value={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        className="checkbox"
                      />
                      <div className="knobs">
                        <span></span>
                      </div>
                      <div className="layer"></div>
                    </div>
                  </div>
                  <label htmlFor="agree">
                    Agree with <Link href="/terms">Terms & Conditions</Link>
                  </label>
                </div>
              </div>
              <button>sign in</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadRegister;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ res, query }) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
      );
      let id = query.id;

      const ress = await API.get(`/get-title?id=${id}`);
      const data = await ress.data;
      return {
        props: { data },
      };
    }
);
