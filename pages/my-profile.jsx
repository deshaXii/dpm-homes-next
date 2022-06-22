import React, { useState, useEffect } from "react";
import Default from "../layouts/default";
import {
  FiUser,
  FiLock,
  FiHome,
  FiLogOut,
  FiUploadCloud,
  FiImage,
  FiEdit2,
} from "react-icons/fi";
import { FormattedMessage } from "react-intl";
import {
  getUserProperties,
  logout,
  selectUser,
  selectUserProperties,
} from "../store/slices/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import jsCookies from "js-cookies";
import { useSelector } from "react-redux";
import { GoMegaphone } from "react-icons/go";
import { FcHome } from "react-icons/fc";
import { parseCookies } from "../common/parseCookies";
import {
  FaWhatsapp,
  FaGoogle,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { BiWorld, BiPhone } from "react-icons/bi";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlineTextsms,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import ImageUploading from "react-images-uploading";
import Image from "next/image";
import PropertyCard from "../components/Global/PropertyCard";
import { wrapper } from "../store";
import { updateProfile } from "../store/slices/profile";

const MyProfile = () => {
  const user = useSelector(selectUser);
  const userProperties = useSelector(selectUserProperties);
  const [activeView, setActiveView] = useState("details-view");
  const [unitsType, setUnitsType] = useState("sell");
  const [detailsActiveView, setDetailsActiveView] = useState("personal-view");
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);

  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const [name, setName] = useState(user.data.name);
  const [email, setEmail] = useState(user.data.email);
  const [phone, setPhone] = useState(user.data.phone);
  const [address, setAddress] = useState(user.data.address);
  const [country, setCountry] = useState(user.data.country);
  const [city, setCity] = useState(user.data.city);
  const [about, setAbout] = useState(user.data.about);
  const [image, setImage] = useState(user.data.image);

  const [whatsapp, setWhatsapp] = useState(user.data.whatsapp);
  const [facebook, setFacebook] = useState(user.data.facebook);
  const [google, setGoolge] = useState(user.data.google);
  const [linkedin, setLinkedin] = useState(user.data.linkedin);
  const [twitter, setTwitter] = useState(user.data.twitter);

  const data = {
    name,
    email,
    phone,
    address,
    country,
    city,
    about,
    image,
    whatsapp,
    facebook,
    google,
    linkedin,
    twitter,
  };

  const onChange = (imageList) => {
    if (!imageList.length) {
      setImage(user.data.image);
      setImages([]);
    } else {
      setImage(imageList[0].file);
      setImages(imageList);
    }
  };

  const handleEditMyInfo = (e) => {
    e.preventDefault();
    dispatch(updateProfile(data)).then((res) => console.log(res));
  };

  return (
    <Default>
      <div
        className="my-profile-page-content"
        style={{ padding: "60px 0 120px 0" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-1 col-12">
              <div className="property-viwer-btns arrow-to-right">
                <button
                  onClick={() => {
                    setActiveView("details-view");
                  }}
                  className={`btn details-view ${
                    activeView === "details-view" ? "active" : ""
                  } cursor-pointer`}
                >
                  <div className="view-btn-icon">
                    <FiUser />
                  </div>
                  <span>
                    <FormattedMessage id="section.profile.details" />
                  </span>
                </button>
                <button
                  onClick={() => {
                    setActiveView("units-view");
                  }}
                  className={`btn units-view ${
                    activeView === "units-view" ? "active" : ""
                  } cursor-pointer`}
                >
                  <div className="view-btn-icon">
                    <FiHome />
                  </div>
                  <span>
                    <FormattedMessage id="section.profile.my_units" />
                  </span>
                </button>
                <button
                  onClick={() => {
                    dispatch(logout(jsCookies.getItem("userToken"))).then(
                      () => {
                        router.push("/");
                        toast.success("Logout Successfully");
                      }
                    );
                  }}
                  className={`btn units-view cursor-pointer`}
                >
                  <div className="view-btn-icon">
                    <FiLogOut />
                  </div>
                  <span>
                    <FormattedMessage id="page.home.auth.logout" />
                  </span>
                </button>
              </div>
            </div>
            <div className="col-12 col-md-11">
              <div className="profile-view-area">
                {activeView === "details-view" && (
                  <div className="details-view profile-viewer-area">
                    <div className="profile-viewer-header">
                      <div
                        className={`pvh-button ${
                          detailsActiveView === "personal-view" ? "active" : ""
                        }`}
                      >
                        <button
                          onClick={() => {
                            setDetailsActiveView("personal-view");
                          }}
                        >
                          <div className="pvh-icon">
                            <FiUser />
                          </div>
                          <span>
                            <FormattedMessage id="section.profile.personal_info" />
                          </span>
                        </button>
                      </div>
                      <div
                        className={`pvh-button ${
                          detailsActiveView === "picture-view" ? "active" : ""
                        }`}
                      >
                        <button
                          onClick={() => {
                            setDetailsActiveView("picture-view");
                          }}
                        >
                          <div className="pvh-icon">
                            <FiImage />
                          </div>
                          <span>
                            <FormattedMessage id="section.profile.profile_pic" />
                          </span>
                        </button>
                      </div>
                      <div
                        className={`pvh-button ${
                          detailsActiveView === "social-view" ? "active" : ""
                        }`}
                      >
                        <button
                          onClick={() => {
                            setDetailsActiveView("social-view");
                          }}
                        >
                          <div className="pvh-icon">
                            <GoMegaphone />
                          </div>
                          <span>
                            <FormattedMessage id="section.profile.social_media" />
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="profile-viewer-content">
                      <form onSubmit={(e) => handleEditMyInfo(e)}>
                        {detailsActiveView === "personal-view" && (
                          <div className="personal-view p-d-view">
                            <div className="p-d-v-header">
                              <h4>
                                <FormattedMessage id="section.profile.personal_info" />
                              </h4>
                            </div>
                            <div className="p-d-v-content">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="fullName">
                                      <FormattedMessage id="section.profile.full_name" />
                                    </label>
                                    <div className="input-with-icon">
                                      <input
                                        type="text"
                                        value={name}
                                        onChange={(e) =>
                                          setName(e.target.value)
                                        }
                                        id="fullName"
                                      />
                                      <FiUser />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="password">
                                      <FormattedMessage id="section.profile.password" />
                                    </label>
                                    <div className="input-with-icon">
                                      <input type="password" id="password" />
                                      <FiLock />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="mobile_phone">
                                      <FormattedMessage id="section.profile.mobile_phone" />
                                    </label>
                                    <div className="input-with-icon">
                                      <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) =>
                                          setPhone(e.target.value)
                                        }
                                        id="mobile_phone"
                                      />
                                      <BiPhone />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="address">
                                      <FormattedMessage id="section.profile.address" />
                                    </label>
                                    <div className="input-with-icon">
                                      <input
                                        type="text"
                                        value={address}
                                        onChange={(e) =>
                                          setAddress(e.target.value)
                                        }
                                        id="address"
                                      />
                                      <MdOutlineLocationOn />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="emailAddress">
                                      <FormattedMessage id="section.profile.email_address" />
                                    </label>
                                    <div className="input-with-icon">
                                      <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                          setEmail(e.target.value)
                                        }
                                        id="emailAddress"
                                      />
                                      <MdOutlineEmail />
                                    </div>
                                  </div>

                                  <div className="form-group">
                                    <label htmlFor="whatsapp">
                                      <FormattedMessage id="section.profile.whatsapp" />
                                    </label>
                                    <div className="input-with-icon">
                                      <input
                                        type="text"
                                        value={whatsapp}
                                        onChange={(e) =>
                                          setWhatsapp(e.target.value)
                                        }
                                        id="whatsapp"
                                      />
                                      <FaWhatsapp />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="governorate">
                                      <FormattedMessage id="section.profile.covernorate" />
                                    </label>
                                    <div className="input-with-icon">
                                      <input
                                        type="text"
                                        value={country}
                                        onChange={(e) =>
                                          setCountry(e.target.value)
                                        }
                                        id="governorate"
                                      />
                                      <BiWorld />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <div className="input-with-icon">
                                      <input
                                        type="text"
                                        value={city}
                                        onChange={(e) =>
                                          setCity(e.target.value)
                                        }
                                        id="city"
                                      />
                                      <FiLock />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="bio">
                                      <FormattedMessage id="section.profile.brief" />
                                    </label>
                                    <div className="input-with-icon textarea">
                                      <textarea
                                        value={about}
                                        onChange={(e) =>
                                          setAbout(e.target.value)
                                        }
                                        id="bio"
                                      ></textarea>
                                      <MdOutlineTextsms />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {detailsActiveView === "picture-view" && (
                          <div className="picture-view p-d-view">
                            <div className="social-view p-d-view">
                              <div className="p-d-v-header">
                                <h4>
                                  <FormattedMessage id="section.profile.profile_pic" />
                                </h4>
                              </div>
                              <div className="p-d-v-content">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="d-u-image">
                                      <Image
                                        src={
                                          images[0]?.data_url
                                            ? images[0].data_url
                                            : `https://dpmhomes.com/user-images/${image}`
                                        }
                                        width={180}
                                        height={180}
                                        alt="user image"
                                      />
                                    </div>

                                    <ImageUploading
                                      value={images}
                                      onChange={onChange}
                                      maxNumber={maxNumber}
                                      dataURLKey="data_url"
                                    >
                                      {({
                                        imageList,
                                        onImageUpload,
                                        onImageUpdate,
                                        onImageRemove,
                                        dragProps,
                                      }) => (
                                        // write your building UI
                                        <div className="upload__image-wrapper">
                                          {images.length < 1 && (
                                            <div
                                              className="drag-box"
                                              onClick={onImageUpload}
                                              {...dragProps}
                                            >
                                              <FiUploadCloud />
                                              <span>
                                                <FormattedMessage id="section.profile.drag_and_drop" />
                                              </span>
                                              <button type="button">
                                                <FormattedMessage id="section.profile.browse_files" />
                                              </button>
                                            </div>
                                          )}
                                          <div className="upladed_images_box">
                                            {imageList.map((image, index) => (
                                              <div
                                                key={index}
                                                className="uploadThumb image-item"
                                                id="result"
                                              >
                                                <div className="image-item__btn-wrapper">
                                                  <button
                                                    type="button"
                                                    onClick={() =>
                                                      onImageUpdate(index)
                                                    }
                                                  >
                                                    <FiEdit2 />
                                                  </button>
                                                  <button
                                                    type="button"
                                                    onClick={() =>
                                                      onImageRemove(index)
                                                    }
                                                  >
                                                    <MdOutlineDeleteOutline />
                                                  </button>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      )}
                                    </ImageUploading>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {detailsActiveView === "social-view" && (
                          <div className="social-view p-d-view">
                            <div className="p-d-v-header">
                              <h4>
                                <FormattedMessage id="section.profile.social_media" />
                              </h4>
                            </div>
                            <div className="p-d-v-content">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="facebook">
                                      <FormattedMessage id="section.social_media.facebook" />
                                    </label>
                                    <div className="input-with-icon">
                                      <input
                                        type="text"
                                        value={facebook}
                                        onChange={(e) =>
                                          setFacebook(e.target.value)
                                        }
                                        id="facebook"
                                      />
                                      <FaFacebook />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="twitter">
                                      <FormattedMessage id="section.social_media.twitter" />
                                    </label>
                                    <div className="input-with-icon">
                                      <input
                                        type="text"
                                        value={twitter}
                                        onChange={(e) =>
                                          setTwitter(e.target.value)
                                        }
                                        id="twitter"
                                      />
                                      <FaTwitter />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="google">
                                      <FormattedMessage id="section.social_media.google" />
                                    </label>
                                    <div className="input-with-icon">
                                      <input
                                        type="text"
                                        value={google}
                                        onChange={(e) =>
                                          setGoolge(e.target.value)
                                        }
                                        id="google"
                                      />
                                      <FaGoogle />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="linkedin">
                                      <FormattedMessage id="section.social_media.linkedin" />
                                    </label>
                                    <div className="input-with-icon">
                                      <input
                                        type="text"
                                        value={linkedin}
                                        onChange={(e) =>
                                          setLinkedin(e.target.value)
                                        }
                                        id="linkedin"
                                      />
                                      <FaLinkedin />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="pvc-submit-button">
                          <button type="submit" className="btn">
                            <FormattedMessage id="section.profile.save_changes" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                {activeView === "units-view" && (
                  <div className="units-view profile-viewer-area">
                    <div className="profile-viewer-header">
                      <div
                        className={`pvh-button ${
                          unitsType === "sell" ? "active" : ""
                        }`}
                      >
                        <button
                          onClick={() => {
                            setUnitsType("sell");
                          }}
                        >
                          <div className="pvh-icon">
                            <FcHome />
                          </div>
                          <span>
                            <FormattedMessage id="global.section.title.sell" />
                          </span>
                        </button>
                      </div>
                      <div
                        className={`pvh-button ${
                          unitsType === "rent" ? "active" : ""
                        }`}
                      >
                        <button
                          onClick={() => {
                            setUnitsType("rent");
                          }}
                        >
                          <div className="pvh-icon">
                            <FcHome />
                          </div>
                          <span>
                            <FormattedMessage id="global.section.title.rent" />
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="units-view-box">
                      {unitsType === "sell" && (
                        <div className="row search-property-layout-content">
                          {userProperties.data
                            .filter(
                              (property) => property.sell_rent_type === "sell"
                            )
                            .map((property, index) => (
                              <div className="col-md-3" key={property.id}>
                                <PropertyCard
                                  featureCount="2"
                                  image="/img/property_test_3.jpg"
                                  property={property}
                                />
                              </div>
                            ))}
                        </div>
                      )}
                      {unitsType === "rent" && (
                        <div className="row search-property-layout-content">
                          {userProperties.data
                            .filter(
                              (property) => property.sell_rent_type === "rent"
                            )
                            .map((property, index) => (
                              <div className="col-md-3" key={property.id}>
                                <PropertyCard
                                  featureCount="2"
                                  image="/img/property_test_3.jpg"
                                  property={property}
                                />
                              </div>
                            ))}
                        </div>
                      )}
                      {/* {userProperties.meta.links.map((link) => (
                        <div className="pagination-area">
                          {link
                            .filter((item) => item.url !== null)
                            .map((SItem, index) => (
                              <a>{SItem.label}</a>
                            ))}
                        </div>
                      ))} */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
};

export default MyProfile;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
      );
      let user = store.getState().auth.user;
      if (!user) {
        return {
          redirect: {
            destination: "/login",
          },
          props: {},
        };
      } else {
        const cookies = parseCookies(req);
        const token = cookies.userToken;
        await store.dispatch(getUserProperties(token));
        return {
          props: {},
        };
      }
    }
);
