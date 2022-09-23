import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { wrapper } from "../../store";
import API from "../../store/api";
const LeadRegister = ({ data }) => {
  console.log(data);
  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    document.querySelector(".feedback-wrap").style.display = "none";
    document.querySelector(".notification-wrap").style.display = "none";
  });
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [nationality, setNationality] = useState();
  const [agree, setAgree] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      <style jsx>{`
        @import url(https://fonts.googleapis.com/css?family=Roboto:300);
        .login-page {
          padding: 12% 0 0;
          height: 100vh;
          padding-top: 4%;
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
          border-radius: 12px;
          border: 2px solid var(--mainColor);
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
          border-radius: 8px;
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
          background: var(--mainColor);
          position: relative;
          z-index: 10;
          color: #fff;
          min-width: 500px;
          margin: 0 auto;
          margin-bottom: 20px;
          font-size: 16px;
          font-weight: bold;
          text-align: center;
          line-height: 1.3;
          margin-right: 15px;
          margin-left: 15px;
          padding: 8px 0;
          margin-top: 30px;
          border-radius: 12px;
        }

        .toggle-button-cover input {
          width: auto !important;
        }
        @media (max-width: 760px) {
          .lead-register-title {
            min-width: 40%;
          }
        }
      `}</style>
      <div className="divx">
        <div className="login-page">
          <div
            className="asdawe"
            style={{
              backgroundImage: "url(/img/lead-bg.jpg)",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            
            <Link href="/">
              <a className="brand-logo">
                <Image
                  width={50}
                  height={50}
                  alt="DPMHOMES LOGO"
                  src="/img/logo2.png"
                />
              </a>
            </Link>
          </div>
          <h1 className="lead-register-title">{data.title}</h1>
          {data.address && (
            <h3 className="lead-register-location">{data.address}</h3>
          )}

          <p className="lead-register-description">{data.description}</p>

          {showAlert && (
            <div className="alert-box">
              <div className="vba-bx">
                <h4>Thanks</h4>
                <p>we will shortly contact you for more info.</p>
                <div className="vba-btns">
                  <Link href="/">
                    <a>
                      <button className="btn home">Luxury Aqar</button>
                    </a>
                  </Link>
                  
                  <Link href="tel:97144547816">
                    <a>
                      <button className="btn call">Call Now</button>
                    </a>
                  </Link>
                  <Link href="https://api.whatsapp.com/send/?phone=97144547816">
                    <a>
                      <button className="btn whatsapp">Whats App</button>
                    </a>
                  </Link>
                </div>
                <div className="follow-links">
                  <span>Follow Us:</span>
                  <ul>
                    <li className="Youtube">
                      <a href="https://www.youtube.com/channel/UCWQf9gzbIp99r_oSXVuHVsg">
                        <FaYoutube />
                      </a>
                    </li>
                    <li className="Instagram">
                      <a href="https://www.instagram.com/luxuryaqar/">
                        <FaInstagram />
                      </a>
                    </li>
                    <li className="Snapchat">
                      <a href="https://www.snapchat.com/add/luxuryaqar">
                        <FaSnapchatGhost />
                      </a>
                    </li>
                    <li className="Facebook">
                      <a href="https://www.facebook.com/Luxury-Aqar-102543029270999">
                        <FaFacebook />
                      </a>
                    </li>
                    <li className="Tiktok">
                      <a href="https://www.tiktok.com/@luxuryaqar">
                        <FaTiktok />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

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
                    nationality,
                    title_id: data.id,
                  }).then((res) => {
                    setShowAlert(true);
                  });
                }
              }}
            >
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name - الأسم بالكامل"
              />
              <PhoneInput
                country={"ae"}
                required={true}
                onlyCountries={["ae", "eg", "sa", "kw", "bh", "om", "qa", "jo"]}
                value={phone}
                preferredCountries={["ae", "eg", "sa"]}
                onChange={(value) => setPhone(value)}
              />
              <input
                type="email"
                required
                placeholder="email address - البريد الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                required
                placeholder="Nationality - الجنسية"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
              <div className="agree-box">
                <div className="toggle-button-cover">
                  <input
                    id="agree"
                    type="checkbox"
                    value={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                  <label htmlFor="agree">
                    i have read and agree to the
                    <Link href="/terms">terms of service</Link>
                  </label>
                </div>
              </div>
              <button>Submit</button>
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
