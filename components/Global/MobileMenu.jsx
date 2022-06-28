import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdClose } from "react-icons/md";
import { RiAddLine } from "react-icons/ri";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/auth";

const MobileMenu = ({ setIsOpen, isOpen }) => {
  const user = useSelector(selectUser);
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
      <div className="mobile-menu-header">
        <div className="mobile-menu-header-logo">
          <div className="logo-area">
            <Link href="/">
              <a className="brand-logo">
                <Image
                  width={80}
                  height={65}
                  alt="DPMHOMES LOGO"
                  src="/img/logo.png"
                />
              </a>
            </Link>
          </div>
        </div>
        <div
          className="mobile-menu-close-icon"
          onClick={() => setIsOpen(false)}
        >
          <MdClose />
        </div>
      </div>
      <div className="mobile-menu-list">
        <div className="mobile-menu-list-item">
          <Link href="/">
            <a className="mobile-menu-link">
              <FormattedMessage id="page.home.menu.home" />
            </a>
          </Link>
        </div>
        <div className="mobile-menu-list-item">
          <Link href="/search-sell">
            <a className="mobile-menu-link">
              <FormattedMessage id="page.home.menu.sell" />
            </a>
          </Link>
        </div>
        <div className="mobile-menu-list-item">
          <Link href="/search-rent">
            <a className="mobile-menu-link">
              <FormattedMessage id="page.home.menu.rent" />
            </a>
          </Link>
        </div>
        {user && (
          <div className="mobile-menu-list-item">
            <Link href="/add-property">
              <a className="mobile-menu-link">
                <RiAddLine />
                <span>
                  <FormattedMessage id="page.home.head.advertise" />
                </span>
              </a>
            </Link>
          </div>
        )}
        <div className="mobile-menu-list-item">
          <Link href="/contact-us">
            <a className="mobile-menu-link">
              <FormattedMessage id="page.home.menu.contact" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
