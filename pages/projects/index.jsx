import React from "react";
import Default from "../../layouts/default";
import { useSelector } from "react-redux";
import { getAllProjects, selectProjects } from "../../store/slices/projects";
import Image from "next/image";
import { wrapper } from "../../store";
import Link from "next/link";

const Projects = () => {
  const { allProjects } = useSelector(selectProjects);
  return (
    <Default>
      <div className="projects-page" style={{ padding: "60px 0 120px 0" }}>
        <div className="container">
          <div className="row">
            {allProjects.map((project) => (
              <div className="col-md-4" key={project.id}>
                <div className="project-slide-box">
                  <div className="project-slide-image-box">
                    <Link href={`/projects/${project.id}`}>
                      <a>
                        <Image
                          width={600}
                          height={400}
                          alt="hyde park project image"
                          src={`https://admin.dpmhomes.com/${project.image}`}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="project-slide-info">
                    <h5>{project.name}</h5>
                    <p>
                      Houses Real estate professional must be cognizant of
                      copyright issues when it comes too listing content most
                      notably in connec with listing photographs.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Default>
  );
};

export default Projects;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ res, req, locale }) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
      );
      await store.dispatch(getAllProjects());
      return {
        props: {},
      };
    }
);
