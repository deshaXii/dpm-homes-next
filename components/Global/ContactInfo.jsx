import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiLocationMarker, HiOutlineMailOpen } from "react-icons/hi";
import { FormattedMessage } from "react-intl";

const ContactInfo = () => {
  return (
    <div className="contact-info-area">
      <div className="row">
        <div className="col-md-4">
          <div className="c-info-box">
            <FiPhoneCall />
            <h6><FormattedMessage id="section.contact.phone_title" /></h6>
            <Link href="#">
              <a>+971555855842</a>
            </Link>
            <Link href="#">
              <a>+201000884688</a>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="c-info-box">
            <HiLocationMarker />
            <h6><FormattedMessage id="section.contact.location_title" /></h6>
            <Link href="#">
              <a>
              <FormattedMessage id="section.contact.location_value" />
              </a>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="c-info-box">
            <HiOutlineMailOpen />
            <h6><FormattedMessage id="section.contact.email_title" /></h6>
            <Link href="#">
              <a>info@dpmhomes.com</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
