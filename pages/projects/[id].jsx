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
import { AiOutlineVideoCamera } from "react-icons/ai";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { BsCheck } from "react-icons/bs";

const Project = () => {
  const [detailsCollapsed, setDetailsCollapsed] = useState(false);
  const router = useRouter();
  const query = router;
  const { locale } = query;
  const [isOpen, setOpen] = useState(false);

  const { project } = useSelector(selectProjects);
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
            <div className="row align-items-center">
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
            </div>
            <div className="row">
              <div className="col-md-12" key={project.id}>
                <div
                  className="project-header"
                  style={{
                    backgroundImage: `url(https://admin.dpmhomes.com/${project.project_info.image})`,
                  }}
                ></div>
                <div className="project-content">
                  <h1>{project.project_info.name}</h1>
                  <p> {project.project_info.description} </p>
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

                <SectionTitle
                  title={locale === "ar" ? "الوحدات" : "units"}
                  subTitle={project.project_info.name}
                />
                <div className="search-property-layout-content">
                  <div className="row">
                    {project.properties.length ? (
                      project.properties.map((property) => (
                        <div className={`col-lg-3 col-md-6`} key={property.id}>
                          <PropertyCard
                            property={property}
                            featureCount={2}
                            image={`https://admin.dpmhomes.com/property-images/${property.images[0]}`}
                            className="grid-view"
                          />
                        </div>
                      ))
                    ) : (
                      <div>
                        <FormattedMessage id="global.no-property-found" />
                      </div>
                    )}
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
