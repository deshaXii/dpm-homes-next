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
SwiperCore.use([Navigation, Pagination]);

const Projects = () => {
  const { allProjects } = useSelector(selectProjects);

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
        <SectionTitle title="Projects" subTitle="Our" />
        <div className="row">
          <div className="col-12">
            {load ? (
              <Swiper
                speed={1000}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                pagination={{
                  type: "bullets",
                  clickable: true,
                  el: paginationRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.params.pagination.el = paginationRef.current;
                }}
                className="swiper-wrapper"
                spaceBetween={15}
                breakpoints={{
                  10: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
                slidesPerView={2}
              >
                {allProjects.map((project) => (
                  <SwiperSlide className="swiper-slide" key={project.id}>
                    <div className="project-slide-box">
                      <div className="project-slide-image-box">
                        <Image
                          width={600}
                          height={400}
                          alt="hyde park project image"
                          src={`https://dpmhomes.com/${project.image}`}
                        />
                      </div>
                      <div className="project-slide-info">
                        <h5>{project.name}</h5>
                        <p>
                          Houses Real estate professional must be cognizant of
                          copyright issues when it comes too listing content
                          most notably in connec with listing photographs.
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
