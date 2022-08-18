import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker, HiOutlineMailOpen } from "react-icons/hi";
import { FormattedMessage } from "react-intl";

const ContactInfo = ({ settingsData }) => {
  console.log(settingsData);
  return (
    <div className="contact-info-area">
      <div className="row">
        <div className="col-md-4">
          <div className="c-info-box phones">
            <FiPhoneCall />
            <h6>
              <FormattedMessage id="section.contact.phone_title" />
            </h6>
            <div className="dbl-nums">
              <div className="df">
                {settingsData.phone.map((item, index) => (
                  <div className="bv">
                    <FiPhoneCall />
                    <Link key={index} href={`tel:${item.replace("+", "")}`}>
                      <a>+{item}</a>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="dl">
                {settingsData.whatsapp.map((item, index) => (
                  <div className="bv">
                    <FaWhatsapp />
                    <Link
                      key={index}
                      href={`https://api.whatsapp.com/send/?phone=${item.replace(
                        "+",
                        ""
                      )}`}
                    >
                      <a>+{item}</a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="c-info-box">
            <HiLocationMarker />
            <h6>
              <FormattedMessage id="section.contact.location_title" />
            </h6>
            {settingsData.address.map((item, index) => (
              <Link href={settingsData.location[index]} key={index}>
                <a>{item}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <div className="c-info-box">
            <HiOutlineMailOpen />
            <h6>
              <FormattedMessage id="section.contact.email_title" />
            </h6>
            {settingsData.email.map((item, index) => (
              <Link href={`mailto:${item}`} key={index}>
                <a>{item}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
