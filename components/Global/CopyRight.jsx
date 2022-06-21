import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { FormattedMessage } from "react-intl";

const CopyRight = () => {
  return (
    <div className="app-copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="copyright-text">
           
              <FormattedMessage
                id="section.footer.copy_right"
                values={{
                  a: (chunks) => (
                    <Link href="/">
                      <a>{chunks}</a>
                    </Link>
                  ),
                }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="copyright-social-media-area">
              <ul className="c-social-media-list">
                <li className="c-social-media-list-item">
                  <Link href="#">
                    <a className="c-social-media-list-link">
                      <FaFacebookF />
                    </a>
                  </Link>
                </li>
                <li className="c-social-media-list-item">
                  <Link href="#">
                    <a className="c-social-media-list-link">
                      <FaInstagram />
                    </a>
                  </Link>
                </li>
                <li className="c-social-media-list-item">
                  <Link href="#">
                    <a className="c-social-media-list-link">
                      <FaWhatsapp />
                    </a>
                  </Link>
                </li>
                <li className="c-social-media-list-item">
                  <Link href="#">
                    <a className="c-social-media-list-link">
                      <FaTwitter />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
