import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { FormattedMessage } from "react-intl";
import Select from "react-select";
import fadeWhenScroll from "../../common/fadeWhenScroll";

const HomeIntro = () => {
  const [activeType, setActiveType] = useState("Buy");

  const location_options = [
    { value: "All", label: "All Places" },
    { value: "Cairo", label: "Cairo" },
    { value: "Giza", label: "Giza" },
    { value: "6 Octoper", label: "6 Octoper" },
    { value: "Zayed", label: "Zayed" },
  ];

  const area_size_options = [
    { value: "80-100", label: "from 80 sqm to 120 sqm" },
    { value: "120-150", label: "from 120 sqm to 150 sqm" },
    { value: "150-200", label: "from 150 sqm to +200 sqm" },
  ];

  const property_type_options = [
    { value: "Office Space", label: "Office Space" },
    { value: "Retail", label: "Retail" },
    { value: "Villa", label: "Villa" },
    { value: "Shop", label: "Shop" },
  ];

  const selectStyle = {
    control: (base, { isFocused }) => ({
      ...base,
      border: "1px solid var(--mainColor)",
      boxShadow: "none",
      color: "red",
      "&:hover": {
        border: "1px solid var(--mainColor)",
      },
    }),
    option: (styles, { isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "var(--mainColor)" : null,
        color: "#000",
      };
    },
  };

  useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".intro-content"));
  }, []);

  return (
    <header className="home-header">
      <div
        className="home-header-bg"
        style={{ backgroundImage: "url(/img/home-header-bg.jpg)" }}
      >
        &nbsp;
      </div>
      <div className="row">
        <div className="intro-content">
          <h1>
            <FormattedMessage
              id="page.home.intro.title"
              values={{ span: (chunks) => <span>{chunks}</span> }}
            />
          </h1>
          <p>
            <FormattedMessage id="page.home.intro.description" />
          </p>
        </div>
        <div className="intro-filter">
          <form className="intro-properties-filter">
            <div className="filter-type">
              <div
                className={`custom-radio-box ${
                  activeType === "Buy" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="filter-type"
                  checked={activeType === "Buy" ? true : false}
                  onChange={(e) =>
                    e.currentTarget.checked
                      ? setActiveType("Buy")
                      : setActiveType("Rent")
                  }
                />
                <span>
                  <FormattedMessage id="page.home.menu.sell" />
                </span>
              </div>
              <div
                className={`custom-radio-box ${
                  activeType === "Rent" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  checked={activeType === "Rent" ? true : false}
                  name="filter-type"
                  onChange={(e) =>
                    e.currentTarget.checked
                      ? setActiveType("Rent")
                      : setActiveType("Buy")
                  }
                />
                <span>
                  <FormattedMessage id="page.home.menu.rent" />
                </span>
              </div>
            </div>
            <div className="filter-options">
              <div className="filter-option">
                <label htmlFor="city_select">
                  <FormattedMessage id="page.home.auth.properties.filter.location" />
                </label>
                <Select
                  styles={selectStyle}
                  isShow={true}
                  placeholder={
                    <FormattedMessage id="page.home.auth.properties.filter.select_location" />
                  }
                  name="city"
                  id="city_select"
                  options={location_options}
                  instanceId="city_select"
                />
              </div>
              <div className="filter-option">
                <label htmlFor="area_size_select">
                  <FormattedMessage id="page.home.auth.properties.filter.area_size" />
                </label>
                <Select
                  styles={selectStyle}
                  name="area_size"
                  id="area_size_select"
                  placeholder={<FormattedMessage id="page.home.auth.properties.filter.select_area_size" />}
                  options={area_size_options}
                  instanceId="area_size_select"
                />
              </div>
              <div className="filter-option">
                <label htmlFor="property_type">
                  <FormattedMessage id="page.home.auth.properties.filter.property_type" />
                </label>
                <Select
                  styles={selectStyle}
                  instanceId="property_type"
                  placeholder={<FormattedMessage id="page.home.auth.properties.filter.select_property_type" />}
                  name="type"
                  id="property_type"
                  options={property_type_options}
                />
              </div>
              <div className="filter-btn">
                <button type="submit" className="dpm-btn btn submit-filter-btn">
                  <BiSearch />
                  <span>
                    <FormattedMessage id="search" />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default HomeIntro;
