import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Select from "react-select";
import { AiOutlineBorderOuter } from "react-icons/ai";
import { MdOutlineBathtub, MdClear, MdOutlineLocationOn } from "react-icons/md";
import { RiHotelBedLine, RiHomeSmileLine } from "react-icons/ri";
import dynamic from "next/dynamic";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllGovernorates, selectCountries } from "../store/slices/countries";
import { useRouter } from "next/router";
import {
  resetFilter,
  selectFilter,
  setActiveCountry,
  setActiveGovernorate,
  setActiveSize,
  setBathCount,
  setBedCount,
  filterByCountry,
  setPropertyType,
  setUUType,
  filterByGovernorate,
  setFilteredProperties,
  filterByBedNum,
  filterByBathNum,
  filterByAreaSize,
  filterByPropertyType,
  filterByUType,
} from "../store/slices/filter";
import { selectProperties } from "../store/slices/properties";

const ReactSlider = dynamic(() => import("react-slider"), { ssr: false });

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

const uritType_en = [
  { value: "housing", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "Administrative", label: "Administrative" },
];
const uritType_ar = [
  { value: "housing", label: "سكني" },
  { value: "commercial", label: "تجاري" },
  { value: "Administrative", label: "أداري" },
];

const Administrative_type_options_ar = [
  { value: "offices", label: "مكاتب" },
  { value: "clinic", label: "عيادات" },
];

const Administrative_type_options_en = [
  { value: "offices", label: "offices" },
  { value: "clinic", label: "clinic" },
];

const commercial_type_options_ar = [
  { value: "shop", label: "محل" },
  { value: "factory", label: "مصنع" },
  { value: "land", label: "قطعة ارض" },
  { value: "warehouse", label: "مخزن" },
  { value: "playground", label: "ملعب" },
  { value: "pharmacy", label: "صيدلية" },
  { value: "mall", label: "مول" },
  { value: "outlet", label: "مركز تسوق" },
];

const commercial_type_options_en = [
  { value: "shop", label: "shop" },
  { value: "factory", label: "factory" },
  { value: "land", label: "land" },
  { value: "warehouse", label: "warehouse" },
  { value: "playground", label: "playground" },
  { value: "pharmacy", label: "pharmacy" },
  { value: "mall", label: "mall" },
  { value: "outlet", label: "outlet" },
];

const hosuing_type_options_ar = [
  { value: "palace", label: "قصر" },
  { value: "villa", label: "فيلا" },
  { value: "twin_house", label: "تون هاوس" },
  { value: "pent_house", label: "بنت هاوس" },
  { value: "flat", label: "منزل" },
  { value: "studio", label: "ستوديو" },
  { value: "chalet", label: "شاليه" },
];

const hosuing_type_options_en = [
  { value: "palace", label: "palace" },
  { value: "villa", label: "villa" },
  { value: "twin_house", label: "twin house" },
  { value: "pent_house", label: "pent house" },
  { value: "flat", label: "flat" },
  { value: "studio", label: "studio" },
  { value: "chalet", label: "chalet" },
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

const PropertiesFilter = ({ showFilter, query }) => {
  const { locale } = useRouter();
  const { allCountries, allGovernorates } = useSelector(selectCountries);
  const { allProperties } = useSelector(selectProperties);
  const [uType, setUType] = useState(() => {
    if (query?.uType) {
      if (locale === "ar") {
        return uritType_ar.find((i) => {
          if (i.value.toLowerCase() === query?.uType?.toLowerCase()) {
            return i;
          }
        });
      } else {
        return uritType_en.find((i) => {
          if (i.value.toLowerCase() === query?.uType?.toLowerCase()) {
            return i;
          }
        });
      }
    }
  });
  const [bedNum, setBedNum] = useState();
  const [bathNum, setBathNum] = useState();
  const [country, setCountry] = useState(() => {
    if (query?.city) {
      return allCountries.find((i) => i.value === Number(query?.city));
    } else {
      return "";
    }
  });
  const [propertyTypeS, setPropertyTypeS] = useState(() => {
    if (query?.uType) {
      if (uType?.value === "housing") {
        if (locale === "ar") {
          hosuing_type_options_ar.find((i) => {
            if (i.value === query?.type) {
              return i;
            }
          });
        } else {
          hosuing_type_options_en.find((i) => {
            if (i.value === query?.type) {
              return i;
            }
          });
        }
      } else if (uType?.value === "commercial") {
        if (locale === "ar") {
          commercial_type_options_ar.find((i) => {
            if (i.value === query?.type) {
              return i;
            }
          });
        } else {
          commercial_type_options_en.find((i) => {
            if (i.value === query?.type) {
              return i;
            }
          });
        }
      } else if (uType?.value === "Administrative") {
        if (locale === "ar") {
          Administrative_type_options_ar.find((i) => {
            if (i.value === query?.type) {
              return i;
            }
          });
        } else {
          Administrative_type_options_en.find((i) => {
            if (i.value === query?.type) {
              return i;
            }
          });
        }
      }
    } else {
      return "";
    }
  });
  const [governorate, setGovernorate] = useState();
  const [areaSize, setAreaSize] = useState();
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetFilter());
    setCountry("");
    setGovernorate("");
    setPropertyTypeS("");
    setUType("");
    setBedNum("");
    setBathNum("");
    setAreaSize("");
    dispatch(setFilteredProperties(allProperties));
  };

  useEffect(() => {
    dispatch(setFilteredProperties(allProperties));
  }, [allProperties]);

  useEffect(() => {
    dispatch(setActiveCountry(country?.value));
    if (country.value) {
      const data = { activeCountry: country.value, locale };
      dispatch(getAllGovernorates(data));
      dispatch(filterByCountry({ allProperties, type: "filter" }));
    }
  }, [country?.value]);

  useEffect(() => {
    if (query?.type) {
      dispatch(setPropertyType(query?.type));
    }
  }, [query?.type]);
  useEffect(() => {
    if (query?.city) {
      dispatch(filterByCountry({ allProperties, type: "filter" }));
    }
  }, [query?.city]);

  useEffect(() => {
    dispatch(setActiveGovernorate(governorate?.value));
    if (governorate) {
      dispatch(filterByGovernorate({ allProperties, type: "filter" }));
    }
  }, [governorate]);
  useEffect(() => {
    dispatch(setUUType(uType?.value));
    if (uType) {
      dispatch(filterByUType({ allProperties, type: "filter" }));
    }
    if (query?.uType) {
      dispatch(setUUType(query?.uType));
    }
  }, [uType?.value, query?.uType]);
 
  useEffect(() => {
    dispatch(setPropertyType(propertyTypeS?.value));
    if (propertyTypeS) {
      dispatch(filterByPropertyType({ allProperties, type: "filter" }));
    }
  }, [propertyTypeS?.value]);

  useEffect(() => {
    dispatch(setActiveSize(areaSize?.value));
    if (areaSize) {
      dispatch(filterByAreaSize({ allProperties, type: "filter" }));
    }
  }, [areaSize]);

  useEffect(() => {
    dispatch(setBedCount(bedNum));
    if (bedNum) {
      dispatch(filterByBedNum({ allProperties, type: "filter" }));
    }
  }, [bedNum]);

  useEffect(() => {
    dispatch(setBathCount(bathNum));
    if (bathNum) {
      dispatch(filterByBathNum({ allProperties, type: "filter" }));
    }
  }, [bathNum]);

  const resetInput = (setInput, action) => {
    setInput("");
    dispatch(action);
  };

  return (
    <aside className={`properties-filter ${showFilter ? "active" : ""}`}>
      <div className="filter-group">
        <div className="fg-top">
          <h5 className="filter-group-title">
            <MdOutlineLocationOn />
            <span>
              <FormattedMessage id="page.home.auth.properties.filter.location_country" />
            </span>
          </h5>
          {country && (
            <div
              className="reset-input-box cursor-pointer"
              onClick={() =>
                resetInput(
                  setCountry,
                  filterByCountry({ allProperties, type: "reset" })
                )
              }
            >
              <MdClear />
            </div>
          )}
        </div>
        <div className="filter-group-content">
          <Select
            styles={selectStyle}
            value={country}
            isSearchable={false}
            onChange={setCountry}
            placeholder={
              <FormattedMessage id="page.home.auth.properties.filter.location_country" />
            }
            name="city"
            id="city_select"
            options={allCountries}
            instanceId="city_select"
          />
        </div>
      </div>
      {country && (
        <div className="filter-group">
          <div className="fg-top">
            <h5 className="filter-group-title">
              <MdOutlineLocationOn />
              <span>
                <FormattedMessage id="page.home.auth.properties.filter.location_governorate" />
              </span>
            </h5>
            {governorate && (
              <div
                className="reset-input-box cursor-pointer"
                onClick={() =>
                  resetInput(
                    setGovernorate,
                    filterByGovernorate({ allProperties, type: "reset" })
                  )
                }
              >
                <MdClear />
              </div>
            )}
          </div>
          <div className="filter-group-content">
            <Select
              styles={selectStyle}
              isSearchable={false}
              placeholder={
                <FormattedMessage id="page.home.auth.properties.filter.location_governorate" />
              }
              value={governorate}
              onChange={setGovernorate}
              name="city"
              id="city_select"
              options={allGovernorates}
              instanceId="city_select"
            />
          </div>
        </div>
      )}
      <div className="filter-group">
        <div className="fg-top">
          <h5 className="filter-group-title">
            <RiHomeSmileLine />
            <span>{locale === "ar" ? "النوع" : "Type"}</span>
          </h5>
          {uType && (
            <div
              className="reset-input-box cursor-pointer"
              onClick={() =>
                resetInput(
                  setUType,
                  filterByUType({ allProperties, type: "reset" })
                )
              }
            >
              <MdClear />
            </div>
          )}
        </div>
        <div className="filter-group-content">
          <Select
            isSearchable={false}
            styles={selectStyle}
            placeholder={
              <FormattedMessage id="page.home.auth.properties.filter.select_property_type" />
            }
            name="unit_type"
            id="unit_type_select"
            options={locale === "ar" ? uritType_ar : uritType_en}
            value={uType}
            onChange={setUType}
            instanceId="unit_type_select"
          />
        </div>
      </div>
      {uType && (
        <div className="filter-group">
          <div className="fg-top">
            <h5 className="filter-group-title">
              <RiHomeSmileLine />
              <span>
                <FormattedMessage id="page.home.auth.properties.filter.property_type" />
              </span>
            </h5>
            {propertyTypeS && (
              <div
                className="reset-input-box cursor-pointer"
                onClick={() =>
                  resetInput(
                    setPropertyTypeS,
                    filterByPropertyType({ allProperties, type: "reset" })
                  )
                }
              >
                <MdClear />
              </div>
            )}
          </div>
          <div className="filter-group-content">
            <Select
              isSearchable={false}
              styles={selectStyle}
              placeholder={
                <FormattedMessage id="page.home.auth.properties.filter.select_property_type" />
              }
              name="city"
              id="city_select"
              options={
                uType.value === "housing"
                  ? locale === "ar"
                    ? hosuing_type_options_ar
                    : hosuing_type_options_en
                  : uType.value === "commercial"
                  ? locale === "ar"
                    ? commercial_type_options_ar
                    : commercial_type_options_en
                  : uType.value === "Administrative"
                  ? locale === "ar"
                    ? Administrative_type_options_ar
                    : Administrative_type_options_en
                  : ""
              }
              value={propertyTypeS}
              onChange={setPropertyTypeS}
              instanceId="city_select"
            />
          </div>
        </div>
      )}

      <div className="filter-group">
        <div className="fg-top">
          <h5 className="filter-group-title">
            <AiOutlineBorderOuter />
            <span>
              <FormattedMessage id="page.home.auth.properties.filter.area_size" />
            </span>
          </h5>
          {areaSize && (
            <div
              className="reset-input-box cursor-pointer"
              onClick={() =>
                resetInput(
                  setAreaSize,
                  filterByAreaSize({ allProperties, type: "reset" })
                )
              }
            >
              <MdClear />
            </div>
          )}
        </div>
        <div className="filter-group-content">
          <Select
            styles={selectStyle}
            isSearchable={false}
            placeholder={
              <FormattedMessage id="page.home.auth.properties.filter.select_area_size" />
            }
            name="city"
            id="city_select"
            value={areaSize}
            onChange={setAreaSize}
            options={
              locale === "ar" ? area_size_options_ar : area_size_options_en
            }
            instanceId="city_select"
          />
        </div>
      </div>

      {uType?.value === "commercial" || uType?.value === "administrative" ? (
        ""
      ) : (
        <>
          <div className="filter-group">
            <div className="fg-top">
              <h5 className="filter-group-title">
                <RiHotelBedLine />
                <span>
                  <FormattedMessage id="section.property_card.bedrooms" />
                </span>
              </h5>
              {bedNum && (
                <div
                  className="reset-input-box cursor-pointer"
                  onClick={() =>
                    resetInput(
                      setBedNum,
                      filterByBedNum({ allProperties, type: "reset" })
                    )
                  }
                >
                  <MdClear />
                </div>
              )}
            </div>
            <div className="filter-group-content d-f">
              <div className="custom-checkbox  cursor-pointer">
                <input
                  type="checkbox"
                  value="1"
                  onChange={(e) => setBedNum(e.target.value)}
                  checked={bedNum === "1" && true}
                />
                <span>1</span>
              </div>
              <div className="custom-checkbox  cursor-pointer">
                <input
                  type="checkbox"
                  value="2"
                  onChange={(e) => setBedNum(e.target.value)}
                  checked={bedNum === "2" && true}
                />
                <span>2</span>
              </div>
              <div className="custom-checkbox  cursor-pointer">
                <input
                  type="checkbox"
                  value="3"
                  onChange={(e) => setBedNum(e.target.value)}
                  checked={bedNum === "3" && true}
                />
                <span>3</span>
              </div>
              <div className="custom-checkbox  cursor-pointer">
                <input
                  type="checkbox"
                  value="10"
                  onChange={(e) => setBedNum(e.target.value)}
                  checked={bedNum === "10" && true}
                />
                <span>+4</span>
              </div>
            </div>
          </div>
          <div className="filter-group">
            <div className="fg-top">
              <h5 className="filter-group-title">
                <MdOutlineBathtub />
                <span>
                  <FormattedMessage id="section.property_card.bathrooms" />
                </span>
              </h5>
              {bathNum && (
                <div
                  className="reset-input-box cursor-pointer"
                  onClick={() =>
                    resetInput(
                      setBathNum,
                      filterByBathNum({ allProperties, type: "reset" })
                    )
                  }
                >
                  <MdClear />
                </div>
              )}
            </div>
            <div className="filter-group-content d-f">
              <div className="custom-checkbox  cursor-pointer">
                <input
                  type="checkbox"
                  value="1"
                  onChange={(e) => setBathNum(e.target.value)}
                  checked={bathNum === "1" && true}
                />
                <span>1</span>
              </div>
              <div className="custom-checkbox  cursor-pointer">
                <input
                  type="checkbox"
                  value="2"
                  onChange={(e) => setBathNum(e.target.value)}
                  checked={bathNum === "2" && true}
                />
                <span>2</span>
              </div>
              <div className="custom-checkbox  cursor-pointer">
                <input
                  type="checkbox"
                  value="3"
                  onChange={(e) => setBathNum(e.target.value)}
                  checked={bathNum === "3" && true}
                />
                <span>3</span>
              </div>
              <div className="custom-checkbox  cursor-pointer">
                <input
                  type="checkbox"
                  value="10"
                  onChange={(e) => setBathNum(e.target.value)}
                  checked={bathNum === "10" && true}
                />
                <span>+4</span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* <div className="filter-group">
        <h5 className="filter-group-title">
          <FaRegMoneyBillAlt />
          <span>
            <FormattedMessage id="section.filter.price_of_meter" />
          </span>
        </h5>
        <div className="filter-group-content">
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            onAfterChange={(value) => setPricePerMeter(value)}
            defaultValue={pricePerMeter}
            min={80}
            max={400}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
            pearling
            minDistance={10}
          />
        </div>
      </div> */}
      <div className="filter-buttons">
        <button
          type="button"
          className="btn filter-reset cursor-pointer"
          onClick={() => handleReset()}
        >
          <FormattedMessage id="page.search.filter.reset" />
        </button>
      </div>
    </aside>
  );
};

export default PropertiesFilter;
