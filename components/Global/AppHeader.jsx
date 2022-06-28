import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { RiAddLine, RiLoginCircleLine } from "react-icons/ri";
import { MdLanguage, MdArrowDropDown } from "react-icons/md";
import { FiUser, FiLogOut, FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/auth";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import jsCookies from "js-cookies";
import SiteMenu from "./SiteMenu";
import MobileMenu from "./MobileMenu";

const AppNavbar = ({ user }) => {
  const { locales, locale, asPath } = useRouter();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  const mobileDropdownRef = useRef();

  return (
    <>
      <nav className="app-navbar">
        <div className="container">
          {/* Logo & Add Property BTN */}
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
            <div className="add-property-area">
              <Link href="/add-property">
                <a className="add-property-btn dpm-btn btn">
                  <RiAddLine />
                  <span>
                    <FormattedMessage id="page.home.head.advertise" />
                  </span>
                </a>
              </Link>
              <span>
                <FormattedMessage id="page.home.head.sadv" />
              </span>
            </div>
          </div>
          {/* navbar Menu */}
          <SiteMenu />
          {/* User BTN & Lang Switcher */}
          <div className="navbar-options-area">
            <div className="navbar-auth-area">
              {user ? (
                <div
                  className="navbar-auth-area-inner"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <div
                    className="navbar-auth-user-data"
                    onClick={() => dropdownRef.current.classList.toggle("show")}
                  >
                    <Image
                      src={`https://admin.dpmhomes.com/user-images/${user.data.image}`}
                      width={40}
                      height={40}
                      alt={`${user.data.name} image`}
                    />
                    <span className="userName">{user.data.name}</span>
                    <MdArrowDropDown className="d-arrow" />
                  </div>
                  <div className="auth-dropdown popup" ref={dropdownRef}>
                    <ul className="auth-dropdown-list">
                      <li className="auth-dropdown-list-item">
                        <Link href="/my-profile">
                          <a>
                            <FiUser />
                            <span>
                              <FormattedMessage id="page.home.auth.profile" />
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li className="auth-dropdown-list-item">
                        <button
                          type="button"
                          onClick={() => {
                            dispatch(logout(jsCookies.getItem("userToken")));
                          }}
                        >
                          <FiLogOut />
                          <span>
                            <FormattedMessage id="page.home.auth.logout" />
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link href="/login">
                  <a className="navbar-login-link">
                    <RiLoginCircleLine />
                    <span>
                      <FormattedMessage id="page.home.auth.login" />
                    </span>
                  </a>
                </Link>
              )}
            </div>
            <div className="navbar-lang-switcher">
              {[...locales]
                .filter((item) => item !== locale)
                .sort()
                .map((locale) => (
                  <Link href={asPath} key={locale} locale={locale}>
                    <a>
                      <MdLanguage className="lang-icon" />
                      <span>{locale}</span>
                    </a>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </nav>
      <nav className="mobile navbar">
        <div className="menu-icon" onClick={() => setIsOpen(true)}>
          <FiMenu />
        </div>
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
        <div className="navbar-auth-area">
          {user ? (
            <div
              className="navbar-auth-area-inner"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div
                className="navbar-auth-user-data"
                onClick={() => mobileDropdownRef.current.classList.toggle("show")}
              >
                <Image
                  src={`https://admin.dpmhomes.com/user-images/${user.data.image}`}
                  width={40}
                  height={40}
                  alt={`${user.data.name} image`}
                />
                <MdArrowDropDown className="d-arrow" />
              </div>
              <div className="auth-dropdown popup" ref={mobileDropdownRef}>
                <ul className="auth-dropdown-list">
                  <li className="auth-dropdown-list-item">
                    <Link href="/my-profile">
                      <a>
                        <FiUser />
                        <span>
                          <FormattedMessage id="page.home.auth.profile" />
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className="auth-dropdown-list-item">
                    <button
                      type="button"
                      onClick={() => {
                        dispatch(logout(jsCookies.getItem("userToken")));
                      }}
                    >
                      <FiLogOut />
                      <span>
                        <FormattedMessage id="page.home.auth.logout" />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link href="/login">
              <a className="navbar-login-link">
                <RiLoginCircleLine />
                <span>
                  <FormattedMessage id="page.home.auth.login" />
                </span>
              </a>
            </Link>
          )}
        </div>
      </nav>
      <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default AppNavbar;
