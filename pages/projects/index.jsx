import React, { useEffect } from "react";
import Default from "../../layouts/default";
import { useSelector } from "react-redux";
import { getAllProjects, selectProjects } from "../../store/slices/projects";
import Image from "next/image";
import { wrapper } from "../../store";
import Link from "next/link";
import SectionTitle from "../../components/Global/SectionTitle";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

const Projects = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);
  const { allProjects } = useSelector(selectProjects);
  const router = useRouter();
  const { locale } = router;
  return (
    <>
      <Head>
        <title>Property in Egypt, Dubai Real Estate - Luxury Aqar</title>
      </Head>
      <Default>
        <div className="projects-page" style={{ padding: "60px 0 120px 0" }}>
          <div className="container">
            <div className="row">
              <SectionTitle
                title={locale === "ar" ? "المشاريع" : "projects"}
                subTitle={locale === "ar" ? "أحدث" : "New"}
              />
              {allProjects.map((project) => (
                <div className="col-md-4" key={project.id}>
                  <div
                    className="project-slide-box"
                    style={{ marginBottom: "15px" }}
                  >
                    <div className="project-slide-image-box">
                      <Link href={`/projects/${project.id}`}>
                        <a>
                          <Image
                            width={600}
                            height={400}
                            alt="hyde park project image"
                            src={`https://admin.luxuryaqar.com/${project.image}`}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="project-slide-info">
                      <Link href={`/projects/${project.id}`}>
                        <a>
                          <h5>
                            {project.name.substr(0, 25)}{" "}
                            {project.name.length > 25 ? "..." : ""}
                          </h5>
                        </a>
                      </Link>
                      <p>
                        {project.description.substr(0, 45)}{" "}
                        {project.description.length > 45 ? (
                          <Link href={`/projects/${project.id}`}>
                            <FormattedMessage id="global.read.more" />
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
