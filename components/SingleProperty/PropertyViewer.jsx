import React, { useState } from "react";
import SectionTitle from "../../components/Global/SectionTitle";
import { BsHeartFill, BsHeart, BsImages } from "react-icons/bs";
import { VscFilePdf } from "react-icons/vsc";
import { MdOutlineViewInAr } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import Slider from "react-slick";
import { FiShare2, FiHeart } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RWebShare } from "react-web-share";

import PrevArrow from "../Global/PrevArrow";
import NextArrow from "../Global/NextArrow";
import { useDispatch, useSelector } from "react-redux";
import {
  getPropertiesWithTpye,
  selectProperties,
} from "../../store/slices/properties";
import { FormattedMessage } from "react-intl";
import jsCookies from "js-cookies";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addPropertyToWishlist } from "../../store/slices/wishlist";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { useRouter } from "next/router";
const PropertyViewer = () => {
  const [isOpen, setOpen] = useState(false);

  const { property } = useSelector(selectProperties);

  const router = useRouter();
  const { locale } = router;

  const dispatch = useDispatch();

  const handleAddToWishlist = (id) => {
    let token = jsCookies.getItem("userToken");
    if (token) {
      dispatch(addPropertyToWishlist(id)).then((res) => {
        if (res.payload.success) {
          dispatch(getPropertiesWithTpye({ type: "all", userToken: token }));
          toast.success(res.payload.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      });
    } else {
      router.push("/login");
    }
  };

  const slider1Settings = {
    arrows: true,
    swipe: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    rtl: locale === "ar" ? true : false,
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
    <>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay={true}
          isOpen={isOpen}
          videoId={property.data.youtube}
          onClose={() => setOpen(false)}
        />
      )}
      
      <section className="property-viewer p50">
        <div className="container">
          {/* <SectionTitle
            title={<FormattedMessage id="page.property.view-Property" />}
            subTitle={<FormattedMessage id="page.property.view-show" />}
          /> */}
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
                        <div className="slider__item" key={imageLink}>
                          <img
                            onClick={() => imageOnClick(imageLink)}
                            src={`https://admin.luxuryaqar.com/property-images/${imageLink}`}
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
                        <div className="slider__item" key={imageLink}>
                          <img
                            onClick={() => imageOnClick(imageLink)}
                            src={`https://admin.luxuryaqar.com/property-images/${imageLink}`}
                            alt="Product image"
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                )}

                {activeView === "pdf-view" && (
                  <div className="property-view-box property-view-pdf">
                    <div className="pdf-as-images">
                      <img
                        src={`https://admin.luxuryaqar.com/pdf-images/${property.data.pdf}`}
                        alt="pdf"
                      />
                    </div>
                  </div>
                )}
                {activeView === "3d-view" && (
                  <div className="property-view-box property-view-3d">
                    <div
                      dangerouslySetInnerHTML={{ __html: property.data.view3d }}
                    />
                  </div>
                )}
                {activeView === "location-view" && (
                  <div className="property-view-box property-view-location">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: property.data.location,
                      }}
                    />
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
                {property.data.youtube && (
                  <button
                    onClick={() => {
                      // setActiveView("video-view");
                      setOpen(true);
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
                )}
                {property.data.pdf && (
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
                )}
                {property.data.view3d && (
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
                )}
                {property.data.location && (
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
                )}
              </div>

              <div className="property-options-buttons">
                <RWebShare
                  data={{
                    text: "luxury aqar property ",
                    url: "https://luxuryaqar.com/",
                    title: "luxuryaqar",
                  }}
                >
                  <button className="btn cursor-pointer share-icon">
                    <FiShare2 />
                  </button>
                </RWebShare>
                <button
                  type="button"
                  className={`btn cursor-pointer wish-btn wishlist-icon ${
                    property.data.wishlist.toLowerCase() === "yes"
                      ? "active"
                      : ""
                  }`}
                  onClick={(e) => handleAddToWishlist(property.data.id)}
                >
                  {property.data.wishlist.toLowerCase() === "yes" ? (
                    <BsHeartFill />
                  ) : (
                    <BsHeart />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyViewer;
