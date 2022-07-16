import React, { useState } from "react";
import SectionTitle from "../../components/Global/SectionTitle";
import { BsImages } from "react-icons/bs";
import { VscFilePdf } from "react-icons/vsc";
import { MdOutlineViewInAr } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import Slider from "react-slick";
import { FiShare2, FiHeart } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PrevArrow from "../Global/PrevArrow";
import NextArrow from "../Global/NextArrow";
import { useSelector } from "react-redux";
import { selectProperties } from "../../store/slices/properties";
import { FormattedMessage } from "react-intl";

const PropertyViewer = () => {
  const { property } = useSelector(selectProperties);

  const slider1Settings = {
    arrows: true,
    swipe: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: false,
  };
  const slider2Settings = {
    arrows: false,
    focusOnSelect: true,
    slidesToShow: 5,
    vertical: true,
    infinite: false,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 2,
          centerPadding: "50px",
        },
      },
    ],
  };
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const [activeView, setActiveView] = useState("images-view");
  return (
    <section className="property-viewer p50">
      <div className="container">
        <SectionTitle
          title={<FormattedMessage id="page.property.view-Property" />}
          subTitle={<FormattedMessage id="page.property.view-show" />}
        />
        <div className="row">
          <div className="col-md-11">
            <div className="property-view-area">
              {activeView === "images-view" && (
                <div className="property-view-box property-view-images">
                  <Slider
                    className="big-slider"
                    asNavFor={nav2}
                    ref={(c) => setNav1(c)}
                    {...slider1Settings}
                  >
                    {property.data.images.map((imageLink, index) => (
                      <div className="slider__item" key={index}>
                        <img
                          src={`https://admin.dpmhomes.com/property-images/${imageLink}`}
                          alt="Product image"
                        />
                      </div>
                    ))}
                  </Slider>
                  <Slider
                    className="small-slider"
                    asNavFor={nav1}
                    ref={(c) => setNav2(c)}
                    {...slider2Settings}
                  >
                    {property.data.images.map((imageLink, index) => (
                      <div className="slider__item" key={index}>
                        <img
                          src={`https://admin.dpmhomes.com/property-images/${imageLink}`}
                          alt="Product image"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
              {activeView === "video-view" && (
                <div className="property-view-box property-view-video">
                  <iframe
                    src="https://www.youtube.com/embed/FoCG-WNsZio"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {activeView === "pdf-view" && (
                <div className="property-view-box property-view-pdf">
                  <div className="pdf-as-images">
                    <img src="/img/pdf-1.jpg" alt="pdf" />
                    <img src="/img/pdf-2.jpg" alt="pdf" />
                    <img src="/img/pdf-3.jpg" alt="pdf" />
                  </div>
                </div>
              )}
              {activeView === "3d-view" && (
                <div className="property-view-box property-view-3d">
                  <iframe
                    src="https://my.matterport.com/show/?m=r98fDQY81RM"
                    frameBorder="0"
                    allowFullScreen
                    allow="xr-spatial-tracking"
                  ></iframe>
                </div>
              )}
              {activeView === "location-view" && (
                <div className="property-view-box property-view-location">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9934.52282952562!2d-0.1408000000000129!3d51.501644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1641494337400!5m2!1sar!2seg"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-1">
            <div className="property-viwer-btns">
              <button
                onClick={() => {
                  setActiveView("images-view");
                }}
                className={`btn images-view ${
                  activeView === "images-view" ? "active" : ""
                } cursor-pointer`}
              >
                <div className="view-btn-icon">
                  <BsImages />
                </div>
                <span>
                  <FormattedMessage id="page.property.view-images" />
                </span>
              </button>
              <button
                onClick={() => {
                  setActiveView("video-view");
                }}
                className={`btn video-view ${
                  activeView === "video-view" ? "active" : ""
                } cursor-pointer`}
              >
                <div className="view-btn-icon">
                  <AiOutlineVideoCamera />
                </div>
                <span>
                  <FormattedMessage id="page.property.view-Video" />
                </span>
              </button>
              <button
                onClick={() => {
                  setActiveView("pdf-view");
                }}
                className={`btn pdf-view ${
                  activeView === "pdf-view" ? "active" : ""
                } cursor-pointer`}
              >
                <div className="view-btn-icon">
                  <VscFilePdf />
                </div>
                <span>
                  <FormattedMessage id="page.property.view-PDF" />
                </span>
              </button>
              <button
                onClick={() => {
                  setActiveView("3d-view");
                }}
                className={`btn 3d-view ${
                  activeView === "3d-view" ? "active" : ""
                } cursor-pointer`}
              >
                <div className="view-btn-icon">
                  <MdOutlineViewInAr />
                </div>
                <span>
                  <FormattedMessage id="page.property.view-3d" />
                </span>
              </button>
              <button
                onClick={() => {
                  setActiveView("location-view");
                }}
                className={`btn location-view ${
                  activeView === "location-view" ? "active" : ""
                } cursor-pointer`}
              >
                <div className="view-btn-icon">
                  <HiOutlineLocationMarker />
                </div>
                <span>
                  <FormattedMessage id="page.property.view-Location" />
                </span>
              </button>
            </div>
            <div className="property-options-buttons">
              <button className="btn cursor-pointer share-icon">
                <FiShare2 />
              </button>
              <button className="btn cursor-pointer wishlist-icon">
                <FiHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyViewer;
