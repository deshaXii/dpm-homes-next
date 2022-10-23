import { useRouter } from "next/router";
import { useState } from "react";

const SectionTitle = ({ title, subTitle, haveBtn, btnLink }) => {
  const { locale } = useRouter();
  const [openMap, setOpenMap] = useState(false);

  return (
    <>
      <div className={`section-title ${haveBtn ? "flex-d" : ""}`}>
        <div className="s-title-box">
          <span>{subTitle}</span>
          <h2>{title}</h2>
        </div>
        {haveBtn && btnLink && (
          <div className="s-btn-box">
            <button className="btn" onClick={() => setOpenMap(true)}>
              {locale === "ar"
                ? "عرض المشاريع علي الخريطه"
                : "show projects on map"}
            </button>
          </div>
        )}
      </div>
      {openMap && btnLink && (
        <div className="map-box-popup">
          <div className="container-popup">
            <div className="popup-header">
              <span>Projects Map</span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  setOpenMap(false);
                }}
              >
                X
              </span>
            </div>
            <div className="popup-content">
              <div
                style={{ height: "100%" }}
                dangerouslySetInnerHTML={{
                  __html: btnLink,
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionTitle;
