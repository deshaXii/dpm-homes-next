import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import {  FiLogOut } from "react-icons/fi";
import { RiAddLine, RiLoginCircleLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { FormattedMessage } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../../store/slices/auth";
import { useRouter } from "next/router";
import { MdLanguage } from "react-icons/md";
import jsCookies from "js-cookies";

const MobileMenu = ({ setIsOpen, isOpen }) => {
  const user = useSelector(selectUser);
  const { locales, locale, asPath } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    setIsOpen(false);
  }, [locale]);

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
              <div className="mml-icon">
                <AiOutlineHome />
              </div>
              <span>
                <FormattedMessage id="page.home.menu.home" />
              </span>
            </a>
          </Link>
        </div>
        <div className="mobile-menu-list-item">
          <Link href="/search-sell">
            <a className="mobile-menu-link">
              <div className="mml-icon">
                <p className="asSVG">{locale === "en" ? "R" : "ب"}</p>
              </div>
              <span>
                <FormattedMessage id="page.home.menu.sell" />
              </span>
            </a>
          </Link>
        </div>
        <div className="mobile-menu-list-item">
          <Link href="/search-rent">
            <a className="mobile-menu-link">
              <div className="mml-icon">
                <p className="asSVG">{locale === "en" ? "R" : "إ"}</p>
              </div>
              <span>
                <FormattedMessage id="page.home.menu.rent" />
              </span>
            </a>
          </Link>
        </div>
        <div className="mobile-menu-list-item">
          <Link href="/add-property">
            <a className="mobile-menu-link">
              <div className="mml-icon">
                <RiAddLine />
              </div>
              <span>
                <FormattedMessage id="page.home.head.advertise" />
              </span>
            </a>
          </Link>
        </div>
        <div className="mobile-menu-list-item">
          <Link href="/contact-us">
            <a className="mobile-menu-link">
              <div className="mml-icon">
                <GrContact className="contact-icon" />
              </div>
              <span>
                <FormattedMessage id="page.home.menu.contact" />
              </span>
            </a>
          </Link>
        </div>
        <div className="mobile-menu-list-item">
          <div className="navbar-lang-switcher">
            {[...locales]
              .filter((item) => item !== locale)
              .sort()
              .map((locale) => (
                <Link href={asPath} key={locale} locale={locale}>
                  <a className="mobile-menu-link">
                    <div className="mml-icon">
                      <MdLanguage className="lang-icon" />
                    </div>
                    <span>
                      {locale === "en"
                        ? "التحويل الي الإنجليزية"
                        : "Switch To Arabic"}
                    </span>
                  </a>
                </Link>
              ))}
          </div>
        </div>
        <div className="mobile-menu-list-item">
          <div className="navbar-auth-area">
            {user ? (
              <>
                <div className="navbar-auth-area-inner">
                  <div className="mml-icon">
                    <div className="navbar-auth-user-data">
                      <Image
                        src={`https://admin.dpmhomes.com/user-images/${user.data.image}`}
                        width={40}
                        height={40}
                        alt={`${user.data.name} image`}
                      />
                    </div>
                  </div>
                  <Link href="/my-profile">
                    <a className="mobile-menu-link">
                      <span>
                        <FormattedMessage id="page.home.auth.profile" />
                      </span>
                    </a>
                  </Link>
                </div>
              </>
            ) : (
              <Link href="/login">
                <a className="navbar-login-link mobile-menu-link">
                  <div className="mml-icon">
                    <RiLoginCircleLine />
                  </div>
                  <span>
                    <FormattedMessage id="page.home.auth.login" />
                  </span>
                </a>
              </Link>
            )}
          </div>
        </div>

        {user && (
          <div className="mobile-menu-list-item">
            <div className="navbar-auth-area-inner mobile-menu-link">
              <div className="mml-icon">
                <FiLogOut />
              </div>
              <button
                type="button"
                onClick={() => {
                  dispatch(logout(jsCookies.getItem("userToken")));
                }}
              >
                <span>
                  <FormattedMessage id="page.home.auth.logout" />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
