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
          <Link
            href="#0"
          >
            <a
            onClick={(e) => router.push(`/search?type=sell`)}
              className={`navbar-menu-list-item-link ${
                router.pathname === "/search" && router.query.type === "sell"
                  ? "active-link"
                  : ""
              }`}
            >
              <FormattedMessage id="page.home.menu.sell" />
            </a>
          </Link>
        </li>
        <li className="navbar-menu-list-item">
          <Link
            href="#"
            query
          >
            <a
            onClick={(e) => router.push(`/search?type=rent`)}
              className={`navbar-menu-list-item-link ${
                router.pathname === "/search" && router.query.type === "rent"
                  ? "active-link"
                  : ""
              }`}
            >
              <FormattedMessage id="page.home.menu.rent" />
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
