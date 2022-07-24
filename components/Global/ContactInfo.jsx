import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiLocationMarker, HiOutlineMailOpen } from "react-icons/hi";
import { FormattedMessage } from "react-intl";

const ContactInfo = ({ settingsData }) => {
  return (
    <div className="contact-info-area">
      <div className="row">
        <div className="col-md-4">
          <div className="c-info-box">
            <FiPhoneCall />
            <h6>
              <FormattedMessage id="section.contact.phone_title" />
            </h6>
            {settingsData.phone.map((item, index) => (
              <Link key={index} href={`tel:${item}`}>
                <a>{item}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <div className="c-info-box">
            <HiLocationMarker />
            <h6>
              <FormattedMessage id="section.contact.location_title" />
            </h6>
            {settingsData.address.map((item, index) => (
              <Link href={settingsData.location[index]}>
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
