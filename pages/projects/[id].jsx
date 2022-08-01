import React, { useEffect } from "react";
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

const Project = () => {
  const router = useRouter();
  const query = router.query;
  const { project } = useSelector(selectProjects);
  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);
  console.log(project);
  return (
    <>
      <Head>
        <title>{project.project_info.name}</title>
      </Head>
      <Default>
        <div className="project-page" style={{ padding: "60px 0 120px 0" }}>
          <div className="container">
            <div className="row">
              <SectionTitle title="The Project" subTitle="About" />
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
                <SectionTitle
                  title="properties"
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
      console.log(query);
      await store.dispatch(
        getCurrentProject({ id: Number(query.id), lang: locale })
      );
      return {
        props: {},
      };
    }
);
