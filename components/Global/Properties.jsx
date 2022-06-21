import React from "react";
import { FormattedMessage } from "react-intl";
import PropertyCard from "../Global/PropertyCard";
import SectionTitle from "../Global/SectionTitle";
import { useSelector } from "react-redux";
import { selectProperties } from "../../store/slices/properties";

const Properties = ({ sectionTitle, sectionClass }) => {
  const { allProperties } = useSelector(selectProperties);
  return (
    <section className={`properties-section ${sectionClass} p80`}>
      {sectionClass === "for-rent" ? <span className="s-layer1"></span> : ""}
      <div className="container">
        <SectionTitle
          title={sectionTitle}
          subTitle={<FormattedMessage id="global.section.sub_title" />}
        />
        <div className="row search-property-layout-content">
          {allProperties.slice(0, 4).map((property) => (
            <div className="col-md-3" key={property.id}>
              <PropertyCard
                featureCount="2"
                image="/img/property_test_3.jpg"
                property={property}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
