import React from "react";
import Default from "../../layouts/default";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { wrapper } from "../../store";
import {
  eventRegister,
  getEvent,
  selectEvents,
} from "../../store/slices/events";
import { useDispatch, useSelector } from "react-redux";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { HiClock } from "react-icons/hi";
import EventCountDown from "../../components/eventCountDown";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import { selectUser } from "../../store/slices/auth";
import { useState } from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EventPage = () => {
  const { event } = useSelector(selectEvents);
  const eventTags = ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7"];
  const router = useRouter();
  const { query, locale } = router;
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [showPopup, setShowPopup] = useState();

  const user = useSelector(selectUser);
  let data;
  if (user) {
    data = {
      event: query.id,
      name: user.data.name,
      email: user.data.email,
      lang: locale,
      phone: user.data.phone,
    };
  } else {
    data = {
      event: query.id,
      name,
      lang: locale,
      email,
      phone,
    };
  }

  const setRegisterType = () => {
    if (user) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Default>
      <div className="event-page">
        <div className="top-section">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <section className="event-image-box">
                  <img
                    src={`https://admin.luxuryaqar.com/project-images/${event.project_image}`}
                    alt="event project page"
                  />
                  {/* s */}
                </section>
                <div className="event-main-information">
                  <div className="emi-location-and-day">
                    {event.location && (
                      <div className="emi-location">
                        <div className="emi-icon">
                          <MdLocationPin />
                        </div>
                        <span>{event.location}</span>
                      </div>
                    )}
                    <div className="emi-day">
                      <div className="emi-icon">
                        <HiClock />
                      </div>
                      <span>
                        <FormattedMessage id="components.countdown.event.from" />
                        <div>{event.start_date}</div>
                        <div>-</div>
                        <FormattedMessage id="components.countdown.event.to" />
                        <div>{event.end_date}</div>
                      </span>
                    </div>
                  </div>
                  <h1>{event.project_name}</h1>
                  <p>{event.description}</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="eib-content">
                  <div className="event-project-logo">
                    <img
                      src={`https://admin.luxuryaqar.com/user-images/${event.company_image}`}
                      alt="company logo"
                    />
                  </div>
                  <div className="event-project-name">
                    <h5>{event.company}</h5>
                  </div>
                  <div className={`event-status-box ${event.type}`}>
                    <p>
                      <FormattedMessage id="components.countdown.event.status" />
                      :
                    </p>
                    <span>
                      {event.type === "online" ? (
                        <FormattedMessage id="components.countdown.event.online" />
                      ) : (
                        <FormattedMessage id="components.countdown.event.offline" />
                      )}
                    </span>
                  </div>
                  <div className="event-company-btns">
                    <button
                      className="btn appoiment"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPopup(setRegisterType);
                        if (user) {
                          dispatch(eventRegister(data)).then((res) => {
                            toast.success(res.payload.message, {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                            });
                          });
                        }
                      }}
                    >
                      <FormattedMessage id="components.countdown.event.appoiment" />
                    </button>
                    <button className="btn call" type="button">
                      <FormattedMessage id="components.countdown.event.call" />
                    </button>

                    {/* href={`https://api.whatsapp.com/send/?phone=%${97144547816}&text=اأريد الإستفسار حول هذا العقار: https://luxuryaqar.com${
                      router.asPath
                    }`} */}
                  </div>
                </div>
                {event.type === "online" && (
                  <EventCountDown end={event.start_date} />
                )}
              </div>
            </div>
          </div>
        </div>

        {eventTags.length && (
          <div className="event-tags-section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <ul className="event-tags-list">
                    {eventTags.map((item, index) => (
                      <li className="event-tag-item" key={index}>
                        <h6>{item}</h6>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {!user && showPopup && (
        <div className="register-event-wrap">
          <div className="register-event-popup">
            <div className="rep-header">
              <div className="rep-title">
                <h5>Register at the event</h5>
              </div>
              <div
                className="rep-popup-close-box"
                onClick={() => setShowPopup(false)}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="rep-content">
              <form
                className="rep-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(eventRegister(data));
                }}
              >
                <div className="form-group">
                  <div className="input-icon">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={`${locale === "en" ? "Name" : "الاسم"}`}
                    autoComplete="false"
                  />
                </div>
                <div className="form-group">
                  <div className="input-icon">
                    <MdEmail />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={`${
                      locale === "en" ? "Email" : " البريد الالكتروني"
                    }`}
                    autoComplete="false"
                  />
                </div>
                <div className="form-group">
                  <div className="input-icon">
                    <FaPhoneAlt />
                  </div>
                  <PhoneInput
                    country={"eg"}
                    placeholder={`${
                      locale === "en" ? "Phone Number" : " رقم الهاتف"
                    }`}
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
                <div className="form-group form-btn">
                  <button className="btn event-register-btn" type="submit">
                    {locale === "en" ? "Register" : " تسجيل"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Default>
  );
};

export default EventPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ res, req, query, locale }) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
      );
      await store.dispatch(getEvent({ id: query.id, lang: locale }));
      return {
        props: {},
      };
    }
);
