import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";
import ContactInfo from "./ContactInfo";

const AppFooter = () => {
  return (
    <footer>
      <div className="container">
        <ContactInfo />
        <div className="row">
          <div className="col-md-2">
            <div className="footer-app-info">
              <Link href="#">
                <a>
                  <Image
                    src="/img/logo2.png"
                    width={100}
                    height={100}
                    alt="Dpmhomes logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-a-info">
              <p>
                <FormattedMessage id="section.footer.about_us" />
              </p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="footer-menu">
              <h6>
                <FormattedMessage id="section.footer.site_menu" />
              </h6>
              <ul className="footer-menu-list">
                <li className="footer-menu-item">
                  <Link href="/">
                    <a className="footer-menu-link">
                      <FormattedMessage id="section.footer.about_link" />
                    </a>
                  </Link>
                </li>
                <li className="footer-menu-item">
                  <Link href="/">
                    <a className="footer-menu-link">
                      <FormattedMessage id="page.home.menu.sell" />
                    </a>
                  </Link>
                </li>
                <li className="footer-menu-item">
                  <Link href="/">
                    <a className="footer-menu-link">
                      <FormattedMessage id="page.home.menu.rent" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="footer-menu">
              <h6>
                <FormattedMessage id="section.footer.help" />
              </h6>
              <ul className="footer-menu-list">
                <li className="footer-menu-item">
                  <Link href="/">
                    <a className="footer-menu-link">
                      <FormattedMessage id="section.footer.terms_link" />
                    </a>
                  </Link>
                </li>
                <li className="footer-menu-item">
                  <Link href="/">
                    <a className="footer-menu-link">
                      <FormattedMessage id="section.footer.contact_link" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
