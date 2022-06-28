import React, { useEffect, useState } from "react";
import PropertiesFilter from "../components/properties-filter";
import Default from "../layouts/default";
import { FaListUl } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import PropertyCard from "../components/Global/PropertyCard";
import Head from "next/head";
import { wrapper } from "../store";
import { getAllCountries } from "../store/slices/countries";
import {
  getPropertiesWithTpye,
  selectProperties,
} from "../store/slices/properties";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { selectFilter, setFilteredProperties } from "../store/slices/filter";

const Search = () => {
  const { allProperties } = useSelector(selectProperties);
  const { filteredProperties } = useSelector(selectFilter);
  const [layout, setLayout] = useState("grid");
  const [showFilter, setShowFilter] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);

  return (
    <>
      <Head>
        <title>dpm homes - properties for sell</title>
      </Head>
      <Default>
        <div className="search-page" style={{ padding: "60px 0 120px 0" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className={`mobile-search-filter-btn`}
                >
                  {!showFilter ? 'Show Filter' : 'Hide Filter'}
                </button>
                <PropertiesFilter
                  allProperties={allProperties}
                  showFilter={showFilter}
                />
              </div>
              <div className="col-md-9">
                <div className="filtered-properties">
                  <div className="search-property-layout-header">
                    <div className="splh-left">
                      <span>
                        <p>{filteredProperties.length}</p>
                        <FormattedMessage id="page.search.properties_found" />
                      </span>
                    </div>
                    <div className="splh-right">
                      <div
                        className={`splhr-item list-icon cursor-pointer ${
                          layout === "list" ? "active" : ""
                        }`}
                      >
                        <FaListUl onClick={() => setLayout("list")} />
                      </div>
                      <div
                        className={`splhr-item cursor-pointer ${
                          layout === "grid" ? "active" : ""
                        }`}
                      >
                        <BsGridFill onClick={() => setLayout("grid")} />
                      </div>
                    </div>
                  </div>
                  <div className="search-property-layout-content">
                    <div className="row">
                      {filteredProperties.length ? (
                        filteredProperties.slice(0, 9).map((property) => (
                          <div
                            className={`col-md-${layout === "grid" ? 4 : 12}`}
                            key={property.id}
                          >
                            <PropertyCard
                              property={property}
                              featureCount={2}
                              image={`https://admin.dpmhomes.com/property-images/${property.images[0]}`}
                              className={
                                layout === "grid" ? "grid-view" : "list-view"
                              }
                            />
                          </div>
                        ))
                      ) : (
                        <div>No Properties Found</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Default>
    </>
  );
};

export default Search;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ res, locale }) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
      );
      await store.dispatch(getAllCountries(locale));
      await store.dispatch(getPropertiesWithTpye({ type: "sell" }));
      return {
        props: {},
      };
    }
);
