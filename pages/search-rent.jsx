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
import { selectFilter } from "../store/slices/filter";
import { useRouter } from "next/router";
import PaginatedItems from "../components/Global/PaginatedItems";

const Search = () => {
  const { locale } = useRouter();
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
        <title>Property in Egypt, Dubai Real Estate - Luxury Aqar</title>
      </Head>
      <Default>
        <div className="search-page" style={{ padding: "60px 0 120px 0" }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4">
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className={`mobile-search-filter-btn`}
                >
                  {!showFilter ? "Show Filter" : "Hide Filter"}
                </button>
                <PropertiesFilter
                  allProperties={allProperties}
                  showFilter={showFilter}
                />
              </div>
              <div className="col-xl-9 col-lg-9 col-md-8">
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
                        <PaginatedItems
                          itemsPerPage={9}
                          layout={layout}
                          items={filteredProperties}
                        />
                      ) : (
                        <div>
                          <FormattedMessage id="global.no-property-found" />
                        </div>
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
      const currency = await store.getState().settings.settingsData.currency;
      await store.dispatch(getAllCountries(locale));
      await store.dispatch(
        getPropertiesWithTpye({
          type: "rent",
          lang: locale,
          currency: currency,
        })
      );
      return {
        props: {},
      };
    }
);
