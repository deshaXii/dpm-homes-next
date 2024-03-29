import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

const SiteMenu = () => {
  const router = useRouter();
  return (
    <div className="navbar-main-menu-area">
      <ul className="navbar-menu-list">
        <li className="navbar-menu-list-item">
          <Link href="/">
            <a
              className={`navbar-menu-list-item-link ${
                router.pathname === "/" ? "active-link" : ""
              }`}
            >
              <FormattedMessage id="page.home.menu.home" />
            </a>
          </Link>
        </li>
        <li className="navbar-menu-list-item">
          <Link href="/search-sell">
            <a
              className={`navbar-menu-list-item-link ${
                router.pathname === "/search-sell" ? "active-link" : ""
              }`}
            >
              <FormattedMessage id="page.home.menu.sell" />
            </a>
          </Link>
        </li>
        {/* disabled in beta  href="/search-rent" */}
        <li className="navbar-menu-list-item ">
          <Link href="/search-rent">
            <a
              className={`navbar-menu-list-item-link ${
                router.pathname === "/search-rent" ? "active-link" : ""
              }`}
            >
              <FormattedMessage id="page.home.menu.rent" />
            </a>
          </Link>
        </li>
        <li className="navbar-menu-list-item ">
          <Link href="/projects">
            <a
              className={`navbar-menu-list-item-link ${
                router.pathname === "/projects" ? "active-link" : ""
              }`}
            >
              <FormattedMessage id="page.home.menu.projects" />
            </a>
          </Link>
        </li>
        <li className="navbar-menu-list-item ">
          <Link href="/events">
            <a
              className={`navbar-menu-list-item-link ${
                router.pathname === "/events" ? "active-link" : ""
              }`}
            >
              <FormattedMessage id="page.home.menu.events" />
            </a>
          </Link>
        </li>
        <li className="navbar-menu-list-item">
          <Link href="/contact-us">
            <a
              className={`navbar-menu-list-item-link ${
                router.pathname === "/contact-us" ? "active-link" : ""
              }`}
            >
              <FormattedMessage id="page.home.menu.contact" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SiteMenu;
