import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionTitle from "../Global/SectionTitle";
import { useSelector } from "react-redux";
import { selectProjects } from "../../store/slices/projects";
import Link from "next/link";
SwiperCore.use([Navigation, Pagination]);
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

const Projects = () => {
  const { allProjects } = useSelector(selectProjects);
  const router = useRouter();
  const { locale } = router;
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);
  const [load, setLoad] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);

  return (
    <section className="projects-section p80">
      <div className="container">
        <SectionTitle
          title={locale === "ar" ? "المشاريع" : "projects"}
          subTitle={locale === "ar" ? "أحدث" : "New"}
        />
        <div className="row">
          <div className="col-12">
            {load ? (
              <Swiper
                speed={1000}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.params.pagination.el = paginationRef.current;
                }}
                pagination={{
                  type: "bullets",
                  clickable: true,
                  el: paginationRef.current,
                }}
                className="swiper-wrapper"
                spaceBetween={15}
                breakpoints={{
                  10: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                }}
                slidesPerView={3}
              >
                {allProjects.map((project) => (
                  <SwiperSlide className="swiper-slide" key={project.id}>
                    <div className="project-slide-box">
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
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              ""
            )}

            <div className="slider-options">
              <div
                ref={navigationNextRef}
                className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
              >
                <i className="fas fa-chevron-right"></i>
              </div>
              <div
                ref={navigationPrevRef}
                className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
              >
                <i className="fas fa-chevron-left"></i>
              </div>
              <div ref={paginationRef} className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
