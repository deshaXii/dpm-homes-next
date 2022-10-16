import React from "react";
import Default from "../../layouts/default";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const EventPage = () => {
  return (
    <Default>
      <div className="event-page">
        <div className="top-section">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <section className="event-image-box">
                  <img src="/img/project2.jpg" alt="event project page" />
                </section>
              </div>
              <div className="col-md-3">
                <div className="eib-content">
                  <div className="event-project-logo">
                    <img src="/img/logo2.png" alt="high city event" />
                  </div>
                  <div className="event-project-name">
                    <h5>high city compound</h5>
                  </div>
                  <div className="event-status-box online">
                    <p>Event Will be:</p>
                    <span>Online</span>
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
