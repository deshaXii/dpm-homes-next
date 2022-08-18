import React from "react";
import SectionTitle from "../Global/SectionTitle";
import { BiHomeSmile } from "react-icons/bi";
import { MdOutlineApartment } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { GrLinkNext } from "react-icons/gr";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

const Services = ({ sectionBG, withOverlay }) => {
  const router = useRouter();
  const { locale } = router;
  const services = [
    {
      id: 1,
      title: "Houses",
      content:
        "tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum",
      icon: <BiHomeSmile />,
      link: "#",
    },
    {
      id: 2,
      title: "Apartments",
      content:
        "tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum",
      icon: <MdOutlineApartment />,
      link: "#",
    },
    {
      id: 3,
      title: "Commercial",
      content:
        "tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum",
      icon: <BsShop />,
      link: "#",
    },
    // {
    //   id: 4,
    //   title: "Houses",
    //   content:
    //     "tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum",
    //   icon: <BsShop />,
    //   link: "#",
    // },
    // {
    //   id: 5,
    //   title: "Houses",
    //   content:
    //     "tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum",
    //   icon: <BsShop />,
    //   link: "#",
    // },
    // {
    //   id: 6,
    //   title: "Houses",
    //   content:
    //     "tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum",
    //   icon: <BsShop />,
    //   link: "#",
    // },
  ];

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
              key={item.id}
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
                <div className="icon-box">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.content}</p>
                <Link href={item.link}>
                  <a>
                    <span><FormattedMessage id="global.read.more" /></span> <GrLinkNext />
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
