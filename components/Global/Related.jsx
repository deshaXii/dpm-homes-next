import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import SectionTitle from "../Global/SectionTitle";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectProperties } from "../../store/slices/properties";

const PropertyCard = dynamic(() => import("../Global/PropertyCard"));
const Related = ({ properties, sectionTitle, sectionClass }) => {
  const {property} = useSelector(selectProperties);
 
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
          {properties
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
          {properties.length ? (
            <div className="col-12">
              {properties.length > 4 ? (
                <div className="all-properties-box text-center">
                  <Link href={`/search-${property.data.sell_rent_type}`}>
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

export default Related;
