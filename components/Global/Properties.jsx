import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import SectionTitle from "../Global/SectionTitle";
import { useSelector } from "react-redux";
import { selectProperties } from "../../store/slices/properties";
import dynamic from "next/dynamic";
import Link from "next/link";

const PropertyCard = dynamic(() => import("../Global/PropertyCard"));

const Properties = ({ sectionTitle, sectionClass, type }) => {
  const [activeTab, setActiveTab] = useState("housing");
  const { allProperties } = useSelector(selectProperties);
  return (
    <section className={`properties-section ${sectionClass} p80`}>
      {sectionClass === "for-rent" ? <span className="s-layer1"></span> : ""}
      <div className="container">
        <div className="section-title-with-type">
          <SectionTitle
            title={sectionTitle}
            subTitle={<FormattedMessage id="global.section.sub_title" />}
          />
        </div>
        <div className="row search-property-layout-content">
          {allProperties
            .filter( 
              (fProperty) => fProperty.sell_rent_type.toLowerCase() === type
            )
            .slice(0, 4)
            .map((property) => (
              <div
                className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
                key={property.id}
              >
                <PropertyCard
                  featureCount="2"
                  image="/img/property_test_3.jpg"
                  property={property}
                />
              </div>
            ))}

          {allProperties.filter(
            (fProperty) => fProperty.sell_rent_type.toLowerCase() === type
          ).length ? (
            <div className="col-12">
              {allProperties.filter(
                (fProperty) => fProperty.sell_rent_type.toLowerCase() === type
              ).length > 4 ? (
                <div className="all-properties-box text-center">
                  <Link href={`/search-${type}`}>
                    <a className="dpm-btn btn">See More</a>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div className="no-properties">
              <FormattedMessage id="global.no-property-found" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Properties;
