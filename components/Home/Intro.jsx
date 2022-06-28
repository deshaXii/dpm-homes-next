import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import { FormattedMessage } from "react-intl";
import Select from "react-select";
import fadeWhenScroll from "../../common/fadeWhenScroll";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectCountries } from "../../store/slices/countries";

const HomeIntro = () => {
  const { allCountries } = useSelector(selectCountries);
  const router = useRouter();
  const { locale } = router;
  const [activeType, setActiveType] = useState("Sell");
  const [country, setCountry] = useState();
  const [area_size, setAreaSize] = useState();
  const [propertyType, setPropertyType] = useState();
  const [showFitler, setShowFilter] = useState(false);

  const area_size_options_ar = [
    { value: "100", label: "أكبر من 100 متر مربع" },
    { value: "150", label: "أكبر من 150 متر مربع" },
    { value: "200", label: "أكبر من 200 متر مربع" },
    { value: "250", label: "أكبر من 250 متر مربع" },
    { value: "300", label: "أكبر من 300 متر مربع" },
    { value: "350", label: "أكبر من 350 متر مربع" },
    { value: "400", label: "أكبر من 400 متر مربع" },
  ];

  const area_size_options_en = [
    { value: "100", label: "above 100 sqm" },
    { value: "150", label: "above 150 sqm" },
    { value: "200", label: "above 200 sqm" },
    { value: "250", label: "above 250 sqm" },
    { value: "300", label: "above 300 sqm" },
    { value: "350", label: "above 350 sqm" },
    { value: "400", label: "above 400 sqm" },
  ];

  const property_type_options_ar = [
    { value: "palace", label: "قصر" },
    { value: "villa", label: "فيلا" },
    { value: "twin_house", label: "تون هاوس" },
    { value: "pent_house", label: "بنت هاوس" },
    { value: "flat", label: "منزل" },
    { value: "studio", label: "ستوديو" },
    { value: "chalet", label: "شاليه" },
    { value: "shop", label: "محل" },
    { value: "factory", label: "مصنع" },
    { value: "land", label: "قطعة ارض" },
    { value: "warehouse", label: "مستودع" },
    { value: "playground", label: "ملعب" },
    { value: "pharmacy", label: "صيدلية" },
    { value: "mall", label: "مول" },
    { value: "offices", label: "مصنع" },
  ];

  const property_type_options_en = [
    { value: "palace", label: "palace" },
    { value: "villa", label: "villa" },
    { value: "twin_house", label: "twin house" },
    { value: "pent_house", label: "pent house" },
    { value: "flat", label: "flat" },
    { value: "studio", label: "studio" },
    { value: "chalet", label: "chalet" },
    { value: "shop", label: "shop" },
    { value: "factory", label: "factory" },
    { value: "land", label: "land" },
    { value: "warehouse", label: "warehouse" },
    { value: "playground", label: "playground" },
    { value: "pharmacy", label: "pharmacy" },
    { value: "mall", label: "mall" },
    { value: "offices", label: "offices" },
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

  const handleSearch = (e) => {
    e.preventDefault();
    router.push({
      pathname: `/search-${activeType.toLowerCase()}`,
      query: {
        city: country.value,
        size: area_size.value,
        type: propertyType.value,
      },
    });
  };

  useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".intro-content"));
  }, []);

  useEffect(() => {
    setCountry("");
    setAreaSize("");
    setPropertyType("");
  }, [locale]);

  return (
    <header
      className="home-header"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
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
          <div className="quick-search">
            <button onClick={() => setShowFilter(!showFitler)}>
              <FormattedMessage id="global.property-search" />
            </button>
          </div>
        </div>
        <div className={`intro-filter ${showFitler ? "active" : ""}`}>
          <div
            className="filter-close-btn"
            onClick={() => setShowFilter(false)}
          >
            <MdClear />
          </div>
          <form
            className="intro-properties-filter"
            onSubmit={(e) => handleSearch(e)}
          >
            <div className="filter-type">
              <div
                className={`custom-radio-box ${
                  activeType === "Sell" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="filter-type"
                  checked={activeType === "Sell" ? true : false}
                  onChange={(e) =>
                    e.currentTarget.checked
                      ? setActiveType("Sell")
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
                      : setActiveType("Sell")
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
                  isSearchable={false}
                  isShow={true}
                  placeholder={
                    <FormattedMessage id="page.home.auth.properties.filter.select_location" />
                  }
                  name="city"
                  id="city_select"
                  value={country}
                  onChange={setCountry}
                  options={allCountries}
                  instanceId="city_select"
                />
              </div>

              <div className="filter-option">
                <label htmlFor="property_type">
                  <FormattedMessage id="page.home.auth.properties.filter.property_type" />
                </label>
                <Select
                  styles={selectStyle}
                  isSearchable={false}
                  instanceId="property_type"
                  placeholder={
                    <FormattedMessage id="page.home.auth.properties.filter.select_property_type" />
                  }
                  value={propertyType}
                  onChange={setPropertyType}
                  name="type"
                  id="property_type"
                  options={
                    locale === "ar"
                      ? property_type_options_ar
                      : property_type_options_en
                  }
                />
              </div>

              <div className="filter-option">
                <label htmlFor="area_size_select">
                  <FormattedMessage id="page.home.auth.properties.filter.area_size" />
                </label>
                <Select
                  styles={selectStyle}
                  name="area_size"
                  isSearchable={false}
                  id="area_size_select"
                  value={area_size}
                  onChange={setAreaSize}
                  placeholder={
                    <FormattedMessage id="page.home.auth.properties.filter.select_area_size" />
                  }
                  options={
                    locale === "ar"
                      ? area_size_options_ar
                      : area_size_options_en
                  }
                  instanceId="area_size_select"
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
