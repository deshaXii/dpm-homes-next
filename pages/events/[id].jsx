import React from "react";
import Default from "../../layouts/default";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { wrapper } from "../../store";
import { getEvent, selectEvents } from "../../store/slices/events";
import { useSelector } from "react-redux";

const EventPage = () => {
  const { event } = useSelector(selectEvents);
  console.log(event);
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
                </section>
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
                    <p>Event Will be:</p>
                    <span>{event.type}</span>
                  </div>
                  <div className="event-company-btns">
                    <button className="btn appoiment" type="button">
                      حجز
                    </button>
                    <button className="btn call" type="button">
                      اتصل بنا
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      await store.dispatch(getEvent({ id: 2, lang: locale }));
      return {
        props: {},
      };
    }
);
