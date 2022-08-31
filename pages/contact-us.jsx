import React, { useEffect, useState } from "react";
import Default from "../layouts/default";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { contactUs } from "../store/slices/contact";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";

const ContactUs = () => {
  const { locale } = useRouter();

  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const data = {
    name,
    email,
    phone,
    message,
  };

  const sendMessage = (e) => {
    e.preventDefault();
    dispatch(contactUs(data)).then((res) => {
      toast(res.payload.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
  };

  return (
    <>
      <Head>
      <title>Property in Egypt, Dubai Real Estate - Luxury Aqar</title>
      </Head>
      <Default>
        <div className="contact-us-page" style={{ padding: "60px 0 120px 0" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-md-12 contact-bg"
                style={{
                  backgroundImage: "url(/img/login-bg.jpg)",
                  borderRadius: "30px",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  position: "relative",
                }}
              >
                <div className="contact-us-page-title">
                  <h1>
                    <FormattedMessage id="page.contact-us.title" />
                  </h1>
                  {/* <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam
                  </p> */}
                </div>
                <div className="contact-us-form">
                  <form onSubmit={(e) => sendMessage(e)}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder={ locale === "en" ? 'Full Name' : "الإسم بالكامل" }
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder={ locale === "en" ? 'Email Address' : " البريد الإلكتروني" }
                          />
                        </div>
                      </div>
                      <div className="col-md-3"></div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <PhoneInput
                            country={"eg"}
                            placeholder={ locale === "en" ? 'Phone Number' : " رقم الهاتف" }
                            onlyCountries={[
                              "eg",
                              "ae",
                              "sa",
                              "kw",
                              "bh",
                              "om",
                              "qa",
                              "jo",
                            ]}
                            value={phone}
                            onChange={(value) => setPhone(value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                          placeholder={ locale === "en" ? 'Message' : " الرسالة" }
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                          ></textarea>
                        </div>
                        <div className="form-submit-btn">
                          <button type="submit" className="btn">
                            <FormattedMessage id="page.contact-us.form.send" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Default>
    </>
  );
};

export default ContactUs;
