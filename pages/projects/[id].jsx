import React from "react";
import Default from "../../layouts/default";
import { useSelector } from "react-redux";
import { selectProjects, getCurrentProject } from "../../store/slices/projects";
import Image from "next/image";
import { wrapper } from "../../store";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const Project = () => {
  const { project } = useSelector(selectProjects);
  return (
    <Default>
      <div className="projects-page" style={{ padding: "60px 0 120px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12" key={project.id}>
              <div className="search-property-layout-content">
                <div className="row">
                  {project.length ? (
                    project.slice(0, 9).map((property) => (
                      <div
                        className={`col-lg-4 col-md-6`}
                        key={property.id}
                      >
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
  );
};

export default Project;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ res, req, query }) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
      );
      await store.dispatch(getCurrentProject(12));
      return {
        props: {},
      };
    }
);
