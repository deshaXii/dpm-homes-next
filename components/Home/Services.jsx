import React from "react";
import SectionTitle from "../Global/SectionTitle";
import { BiHomeSmile } from "react-icons/bi";
import { MdOutlineApartment } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { GrLinkNext } from "react-icons/gr";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

const Services = ({ sectionBG, withOverlay, data }) => {
  const router = useRouter();
  const { locale } = router;
  const services = data;

  return (
    <section
      className={`services-section p80 ${withOverlay ? "overlay" : ""}`}
      style={{ backgroundImage: `url(${sectionBG})` }}
    >
      <div className="container">
        <SectionTitle
          title={locale === "ar" ? "خدماتنا" : "services"}
          subTitle={locale === "ar" ? "ما هي" : "our"}
        />
        <div className="row">
          {services.map((item, index) => (
            <div
              className="col-12 col-md-4"
              key={index}
              style={{
                marginTop:
                  index + 1 === 1
                    ? "0px"
                    : index + 1 === 2
                    ? "20px"
                    : index + 1 === 3
                    ? "40px"
                    : index + 1 === 4
                    ? "-40px"
                    : index + 1 === 5
                    ? "-20px"
                    : "",
              }}
            >
              <div className="service-box">
                <div className="icon-box">
                  <i className={item.icon}></i>
                </div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <Link href={"#"}>
                  <a>
                    <span>
                      <FormattedMessage id="global.read.more" />
                    </span>{" "}
                    <GrLinkNext />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
