import React, { useEffect, useState } from "react";
import Default from "../../layouts/default";
import { useSelector } from "react-redux";
import { selectProjects, getCurrentProject } from "../../store/slices/projects";
import Image from "next/image";
import { wrapper } from "../../store";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import PropertyCard from "../../components/Global/PropertyCard";
import Head from "next/head";
import SectionTitle from "../../components/Global/SectionTitle";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { BsCamera, BsCheck } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineArrowDropUp, MdOutlineCall } from "react-icons/md";
import PaginatedItems from "../../components/Global/PaginatedItems";

const Project = () => {
  const [detailsCollapsed, setDetailsCollapsed] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showMoreU, setShowMoreU] = useState(false);
  const router = useRouter();
  const query = router;
  const { locale } = query;
  const [isOpen, setOpen] = useState(false);

  const { project } = useSelector(selectProjects);

  const { project_info } = project;
  const { user_info } = project_info;
  console.log(user_info);
  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);
  return (
    <>
      <Head>
        <title>Property in Egypt, Dubai Real Estate - Luxury Aqar</title>
      </Head>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay={true}
          isOpen={isOpen}
          videoId={project.project_info.video}
          onClose={() => setOpen(false)}
        />
      )}
      <Default>
        <div className="project-page" style={{ padding: "60px 0 120px 0" }}>
          <div className="container">
            {/* <div className="row align-items-center">
              <div className="col-md-9">
                <SectionTitle
                  title={project.project_info.name}
                  subTitle={locale === "ar" ? "مشروع" : "project"}
                />
              </div>
              <div className="col-md-3">
                {project.project_info.video && (
                  <button
                    onClick={() => {
                      setOpen(true);
                    }}
                    className={`btn video-view cursor-pointer`}
                  >
                    <div className="play-box">
                      <Image
                        src="/img/play.png"
                        width={80}
                        height={50}
                        alt="play project video"
                      />
                      <p>
                        <FormattedMessage id="project-watch-video" />
                      </p>
                    </div>
                  </button>
                )}
              </div>
            </div> */}
            <div className="row">
              <div className="col-md-9">
                <div className="project-image-slider-area">
                  <div
                    className="project-header"
                    style={{
                      backgroundImage: `url(https://admin.luxuryaqar.com/${project.project_info.image})`,
                    }}
                  ></div>
                  <div className="show-all-images">
                    <BsCamera />
                  </div>
                  {project.project_info.video && (
                    <div
                      className="show-video"
                      onClick={() => {
                        setOpen(true);
                      }}
                    >
                      <FaPlay />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="project-by-comapny-card">
                  <div className="company-image">
                    <Link href={`/clients/${user_info.id}`}>
                      <a>
                        <img
                          src={`https://admin.luxuryaqar.com/user-images/${user_info.image}`}
                          alt={`${user_info.name + " image"}`}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="company-card-content">
                    <div className="ccc-title">
                      <Link href={`/clients/${user_info.id}`}>
                        <a>
                          <h5>{user_info.name}</h5>
                        </a>
                      </Link>
                      {user_info.about && (
                        <p>
                          {showMoreU ? (
                            <p>
                              <>
                                {user_info.about}
                                <a
                                  href="#"
                                  className="show-more-btn"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setShowMoreU(!showMoreU);
                                  }}
                                >
                                  <FormattedMessage id="global.read.more" />
                                </a>
                              </>
                            </p>
                          ) : (
                            <>
                              <p>
                                {user_info.about?.substr(0, 400)}
                                ...
                                <a
                                  className="show-more-btn"
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setShowMoreU(!showMoreU);
                                  }}
                                >
                                  <FormattedMessage id="global.read.more" />
                                </a>
                              </p>
                            </>
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="company-card-buttons">
                    <a className="btn call-btn" href={`tel=${user_info.phone}`}>
                      <MdOutlineCall />
                      <span>Call</span>
                    </a>
                    <a className="btn email-btn">
                      <HiOutlineMail />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12" key={project.id}>
                <div className="project-content">
                  <h1>{project.project_info.name}</h1>
                </div>

                <div
                  className={`details-inner-box ${
                    detailsCollapsed ? "collapsed" : ""
                  }`}
                >
                  <div
                    className="section-inner-title"
                    onClick={() => setDetailsCollapsed(!detailsCollapsed)}
                  >
                    <MdOutlineArrowDropUp />
                    <h4>
                      <FormattedMessage id="page.project.title" />{" "}
                    </h4>
                  </div>
                  <div className="property-details-inner">
                    {project.project_info.starting_date && (
                      <div className="pdi-box">
                        <div className="pdi-name">
                          <FormattedMessage id="page.project.details.starting_date" />
                          :
                        </div>
                        <div className="pdi-value">
                          {project.project_info.starting_date}
                        </div>
                      </div>
                    )}
                    {project.project_info.delivery_date && (
                      <div className="pdi-box">
                        <div className="pdi-name">
                          <FormattedMessage id="page.project.details.delivery_date" />
                          :
                        </div>
                        <div className="pdi-value">
                          {project.project_info.delivery_date}
                        </div>
                      </div>
                    )}
                    {project.project_info.total_area && (
                      <div className="pdi-box">
                        <div className="pdi-name">
                          <FormattedMessage id="page.project.details.total_area" />
                          :
                        </div>
                        <div className="pdi-value">
                          {project.project_info.total_area}
                        </div>
                      </div>
                    )}
                    {project.project_info.building_area && (
                      <div className="pdi-box">
                        <div className="pdi-name">
                          <FormattedMessage id="page.project.details.building_area" />
                          :
                        </div>
                        <div className="pdi-value">
                          {project.project_info.building_area}
                        </div>
                      </div>
                    )}
                    {project.project_info.landscape_area && (
                      <div className="pdi-box">
                        <div className="pdi-name">
                          <FormattedMessage id="page.project.details.landscape_area" />
                          :
                        </div>
                        <div className="pdi-value">
                          {project.project_info.landscape_area}
                        </div>
                      </div>
                    )}
                    {project.project_info.total_units && (
                      <div className="pdi-box">
                        <div className="pdi-name">
                          <FormattedMessage id="page.project.details.total_units" />
                          :
                        </div>
                        <div className="pdi-value">
                          {project.project_info.total_units}
                        </div>
                      </div>
                    )}
                    {project.project_info.sold_out_units && (
                      <div className="pdi-box">
                        <div className="pdi-name">
                          <FormattedMessage id="page.project.details.sold_out_units" />
                          :
                        </div>
                        <div className="pdi-value">
                          {project.project_info.sold_out_units}
                        </div>
                      </div>
                    )}
                    {project.project_info.sold_out_percentage && (
                      <div className="pdi-box">
                        <div className="pdi-name">
                          <FormattedMessage id="page.project.details.sold_out_percentage" />
                          :
                        </div>
                        <div className="pdi-value">
                          {project.project_info.sold_out_percentage}
                        </div>
                      </div>
                    )}
                    {project.project_info.compilation && (
                      <div className="pdi-box">
                        <div className="pdi-name">
                          <FormattedMessage id="page.project.details.compilation" />
                          :
                        </div>
                        <div className="pdi-value">
                          {project.project_info.compilation} %
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="amenities-area property-details-inner">
                    {Number(project.project_info.pool) === 1 && (
                      <div className="pdi-box">
                        <div className="pdi-icon">
                          <BsCheck />
                        </div>
                        <div className="pdi-value">
                          <FormattedMessage id="page.project.details.pool" />
                        </div>
                      </div>
                    )}
                    {Number(project.project_info.club) === 1 && (
                      <div className="pdi-box">
                        <div className="pdi-icon">
                          <BsCheck />
                        </div>
                        <div className="pdi-value">
                          <FormattedMessage id="page.project.details.club" />
                        </div>
                      </div>
                    )}
                    {Number(project.project_info.gym) === 1 && (
                      <div className="pdi-box">
                        <div className="pdi-icon">
                          <BsCheck />
                        </div>
                        <div className="pdi-value">
                          <FormattedMessage id="page.project.details.gym" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="project-content">
                  {showMore ? (
                    <p>
                      <>
                        {project.project_info.description}
                        <a
                          href="#"
                          className="show-more-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowMore(!showMore);
                          }}
                        >
                          <FormattedMessage id="global.read.more" />
                        </a>
                      </>
                    </p>
                  ) : (
                    <>
                      <p>
                        {project.project_info.description.substr(0, 198)}...
                        <a
                          className="show-more-btn"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowMore(!showMore);
                          }}
                        >
                          <FormattedMessage id="global.read.more" />
                        </a>
                      </p>
                    </>
                  )}
                </div>
                <section id="locationNearby" className="locationNearby">
                  <SectionTitle
                    title={<FormattedMessage id="page.project.nearby.title" />}
                    subTitle={
                      <FormattedMessage id="page.project.nearby.subtitle" />
                    }
                  />
                  <ul>
                    <li
                      className="nearbyTab"
                      data-place="education"
                      data-role="popup"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="school"
                        x="0px"
                        y="0px"
                        viewBox="0 0 32 32"
                        xmlSpace="preserve"
                        className="svg-icon-sprite"
                      >
                        <path
                          id="Path_957"
                          fill="#F47D3F"
                          d="M5.8,17.7v5.8L16,29l10.2-5.5v-5.8L16,23.2L5.8,17.7z M16,3L0,11.7l16,8.7l13.1-7.1v10H32V11.7 L16,3z"
                        ></path>
                      </svg>
                      <div className="detail">
                        <div className="label">
                          <FormattedMessage id="page.project.nearby.schools.title" />
                        </div>
                        <div className="locName">
                          <FormattedMessage id="page.project.nearby.schools.description" />
                        </div>
                      </div>
                    </li>
                    <li
                      className="nearbyTab"
                      data-place="catering"
                      data-role="popup"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="restaurant"
                        x="0px"
                        y="0px"
                        viewBox="0 0 32 32"
                        xmlSpace="preserve"
                        className="svg-icon-sprite"
                      >
                        <path
                          id="Path_971"
                          fill="#8F3293"
                          d="M14.5,11.3h-3.2V0.2H8v11.1H4.7V0.2H1.5v11.1c0,3.4,2.7,6.2,6.1,6.3V32h4.1V17.6 c3.4-0.2,6-2.9,6.1-6.3V0.2h-3.2V11.3z M22.6,6.5v12.7h4.1V32h4.1V0.2C26.2,0.2,22.6,3.7,22.6,6.5z"
                        ></path>
                      </svg>
                      <div className="detail">
                        <div className="label">
                          <FormattedMessage id="page.project.nearby.restaurants.title" />
                        </div>
                        <div className="locName">
                          <FormattedMessage id="page.project.nearby.restaurants.description" />
                        </div>
                      </div>
                    </li>
                    <li
                      className="nearbyTab"
                      data-place="healthcare"
                      data-role="popup"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="hospital"
                        x="0px"
                        y="0px"
                        viewBox="0 0 32 32"
                        xmlSpace="preserve"
                        className="svg-icon-sprite"
                      >
                        <path
                          id="np_add_672484_000000"
                          fill="#EF3835"
                          d="M10.9,0v10.9H0v10.1h10.9V32h10.1V21.1H32V10.9H21.1V0H10.9z"
                        ></path>
                      </svg>
                      <div className="detail">
                        <div className="label">
                          <FormattedMessage id="page.project.nearby.hospitals.title" />
                        </div>
                        <div className="locName">
                          <FormattedMessage id="page.project.nearby.hospitals.description" />
                        </div>
                      </div>
                    </li>
                    <li
                      className="nearbyTab"
                      data-place="leisure"
                      data-role="popup"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="park"
                        x="0px"
                        y="0px"
                        viewBox="0 0 32 32"
                        xmlSpace="preserve"
                        className="svg-icon-sprite"
                      >
                        <path
                          id="np_parks_781456_000000"
                          fill="#4E60AC"
                          d="M30,27.4h-3.9v-4c0.4,0.1,0.7,0.2,1.1,0.1c2.6,0,4.6-2.1,4.6-4.7c0,0,0,0,0,0 c0-1.7-0.9-3.4-2.5-4.2c-0.5-2.1-2.4-3.7-4.5-3.7c-1,0-1.9,0.3-2.7,0.9c0.1,0.6,0.2,1.2,0.2,1.7c0,2.9-1.5,5.6-3.9,7.2 c0.7,1.7,2.4,2.8,4.2,2.8c0.4,0,0.8-0.1,1.2-0.2v4H12.4c0-0.1,0-0.2,0-0.3v-6.5c0.6,0.1,1.1,0.2,1.7,0.2c4-0.1,7.1-3.4,7-7.4 c-0.1-2.6-1.5-4.9-3.8-6.1C16.7,3.4,13,1,9.2,1.7C6.4,2.2,4.2,4.5,3.7,7.4c-3.4,2-4.6,6.4-2.6,9.9c1.3,2.2,3.5,3.5,6,3.6 c0.6,0,1.2-0.1,1.8-0.3v6.6c0,0.1,0,0.2,0,0.3H2c-0.8,0.1-1.5,0.8-1.4,1.6c0.1,0.7,0.7,1.3,1.4,1.4h28c0.8-0.1,1.5-0.8,1.4-1.6 C31.4,28.1,30.8,27.5,30,27.4L30,27.4z"
                        ></path>
                      </svg>
                      <div className="detail">
                        <div className="label">
                          <FormattedMessage id="page.project.nearby.Parks.title" />
                        </div>
                        <div className="locName">
                          <FormattedMessage id="page.project.nearby.Parks.description" />
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="mapBox" id="nearbyInlineMap"></div>
                </section>

                <SectionTitle
                  title={locale === "ar" ? "الوحدات" : "units"}
                  subTitle={project.project_info.name}
                />
                <div className="search-property-layout-content">
                  <div className="row">


                  {project.properties.length ? (
                        <PaginatedItems
                          itemsPerPage={8}
                          layout={"grid4"}
                          items={project.properties}
                        />
                      ) : (
                        <div className="no-properties">
                          <FormattedMessage id="global.no-property-found" />
                        </div>
                      )}

{/* 
                    {project.properties.length ? (
                      project.properties.map((property) => (
                        <div className={`col-lg-3 col-md-6`} key={property.id}>
                          <PropertyCard
                            property={property}
                            featureCount={2}
                            image={`https://admin.luxuryaqar.com/property-images/${property.images[0]}`}
                            className="grid-view"
                          />
                        </div>
                      ))
                    ) : (
                      <div>
                        <FormattedMessage id="global.no-property-found" />
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Default>
    </>
  );
};

export default Project;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ res, req, query, locale }) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
      );
      await store.dispatch(
        getCurrentProject({ id: Number(query.id), lang: locale })
      );
      return {
        props: {},
      };
    }
);
