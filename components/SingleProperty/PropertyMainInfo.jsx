import React, { useState, useEffect, useRef } from "react";
import { HiLocationMarker } from "react-icons/hi";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import moveWhenScroll from "../../common/moveWhenScroll";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useSelector, useDispatch } from "react-redux";
import { selectProperties } from "../../store/slices/properties";
import { useRouter } from "next/router";
import { selectUser } from "../../store/slices/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormattedMessage } from "react-intl";

const PropertyMainInfo = () => {
  const { property } = useSelector(selectProperties);
  useEffect(() => {
    let element = document.querySelectorAll(".property-main-info");
    moveWhenScroll(element);
  }, []);

  const router = useRouter();

  const { locale } = router;

  if (property.data.currency === "AED") {
    var formatterAED = new Intl.NumberFormat(`en-eg`, {
      style: "currency",
      currency: "AED",
    });
  } else if (property.data.currency === "EGP") {
    var formatterEGP = new Intl.NumberFormat(`en-eg`, {
      style: "currency",
      currency: "EGP",
    });
  }

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef(null);

  useEffect(() => {
    if (!showDropdown) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [showDropdown]);

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
      <div
        className="property-main-info fixed-at-top"
        style={{
          backgroundImage: `url('https://admin.luxuryaqar.com/property-images/${property.data.images[0]}')`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="property-main-info-inner">
                <div className="pmii-box">
                  <img
                    src={`https://admin.luxuryaqar.com/user-images/${property.data.user_info.image}`}
                    alt=""
                  />
                  <div>
                    <Link href={`/clients/${property.data.user_info.id}`}>
                      <a>
                        <h1 className="property-main-info-name">
                          {property.data.user_info.name}
                          {property.data.user_info.compound_name
                            ? "-" + property.data.user_info.compound_name
                            : ""}
                        </h1>
                      </a>
                    </Link>
                    <div className="property-main-info-location">
                      <HiLocationMarker />
                      <Link href="#">
                        <a>{property.data.address}</a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="property-main-info-buttons">
                  <div className="property-main-info-price">
                    {formatterEGP && property.data.total_price ? (
                      <span>
                        {formatterEGP?.format(property.data.total_price)}
                      </span>
                    ) : property.data.total_price_installment ? (
                      <span>
                        {formatterEGP?.format(
                          property.data.total_price_installment
                        )}
                      </span>
                    ) : (
                      <span>
                        {formatterEGP?.format(property.data.rent_price)}
                      </span>
                    )}
                    {formatterAED && property.data.total_price ? (
                      <span>
                        {formatterAED?.format(property.data.total_price)}
                      </span>
                    ) : property.data.total_price_installment ? (
                      <span>
                        {formatterAED?.format(
                          property.data.total_price_installment
                        )}
                      </span>
                    ) : (
                      <span>
                        {formatterAED?.format(property.data.rent_price)}
                      </span>
                    )}

                    {/* {property.data.total_price ? (
                      <span>{property.data.total_price}</span>
                    ) : property.data.total_price_installment ? (
                      <span>{property.data.total_price_installment}</span>
                    ) : (
                      <span>{property.data.rent_price}</span>
                    )} */}
                  </div>
                  <Link
                    href={`https://api.whatsapp.com/send/?phone=%${97144547816}&text=اأريد الإستفسار حول هذا العقار: https://luxuryaqar.com${
                      router.asPath
                    }`}
                  >
                    <a className="btn" target="_blank">
                      <FaWhatsapp />
                    </a>
                  </Link>
                  <Link href={`tel:${property.data.user_info.phone}`}>
                    <a className="btn">
                      <BsTelephone />
                    </a>
                  </Link>
                  <button
                    className="btn dpm-btn"
                    type="button"
                    onClick={() => setShowDropdown((b) => !b)}
                  >
                    <span>
                      {" "}
                      <FormattedMessage id="page.property.view-Appointment_Booking" />{" "}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDropdown && (
        <div className="overlay">
          <div ref={dropdown} className="appoiment-dropdown-menu dropdown-menu">
            <form onSubmit={(e) => sendMessage(e)}>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Full name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="* Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <PhoneInput
                      country={"eg"}
                      placeholder="Enter Phone Number"
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
                  <div className="form-group">
                    <textarea
                      placeholder="* Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="form-submit-btn">
                    <button type="submit" className="btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyMainInfo;
