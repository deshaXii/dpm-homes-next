import React from "react";
import Default from "../../layouts/default";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { wrapper } from "../../store";
import { getEvent, selectEvents } from "../../store/slices/events";
import { useSelector } from "react-redux";
import { MdLocationPin } from "react-icons/md";
import { HiClock } from "react-icons/hi";
import EventCountDown from "../../components/eventCountDown";

const EventPage = () => {
  const { event } = useSelector(selectEvents);
  const eventTags = ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7"];
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
                <div className="event-main-information">
                  <div className="emi-location-and-day">
                    <div className="emi-location">
                      <MdLocationPin />
                      <span>Egypt - 6th of October</span>
                    </div>
                    <div className="emi-day">
                      <HiClock />
                      <span>
                        from {event.start_date} - to {event.end_date}
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
                <EventCountDown end={event.start_date} />
              </div>
            </div>
          </div>
        </div>

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
      await store.dispatch(getEvent({ id: 3, lang: locale }));
      return {
        props: {},
      };
    }
);
