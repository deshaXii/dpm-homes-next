import React, { useEffect } from "react";
import Default from "../../layouts/default";
import { useSelector } from "react-redux";
import { getAllProjects, selectProjects } from "../../store/slices/projects";
import Image from "next/image";
import { wrapper } from "../../store";
import Link from "next/link";
import SectionTitle from "../../components/Global/SectionTitle";
import Head from "next/head";

const Projects = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);
  const { allProjects } = useSelector(selectProjects);
  return (
    <>
      <Head>
        <title>Luxury Aqar - Projects</title>
      </Head>
      <Default>
        <div className="projects-page" style={{ padding: "60px 0 120px 0" }}>
          <div className="container">
            <div className="row">
              <SectionTitle title="Projects" subTitle="Our" />
              {allProjects.map((project) => (
                <div className="col-md-4" key={project.id}>
                  <div className="project-slide-box">
                    <div className="project-slide-image-box">
                      <Link
                        href={{
                          pathname: `/projects/${project.id}`,
                          query: {
                            name: project.name,
                            description: project.description,
                            image: project.image,
                          },
                        }}
                      >
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
                      <Link
                        href={{
                          pathname: `/projects/${project.id}`,
                          query: {
                            name: project.name,
                            description: project.description,
                            image: project.image,
                          },
                        }}
                      >
                        <a>
                          <h5>{project.name}</h5>
                        </a>
                      </Link>
                      <p>
                        {project.description.substr(0, 70)}{" "}
                        {project.description.length > 70 ? (
                          <Link
                            href={{
                              pathname: `/projects/${project.id}`,
                              query: {
                                name: project.name,
                                description: project.description,
                                image: project.image,
                              },
                            }}
                          >
                            Read More...
                          </Link>
                        ) : (
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Default>
    </>
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
      await store.dispatch(getAllProjects(locale));
      return {
        props: {},
      };
    }
);
