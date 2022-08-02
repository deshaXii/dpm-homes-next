import React, { useState, useEffect } from "react";
import { FiUploadCloud, FiEdit2 } from "react-icons/fi";
import Select from "react-select";
import { MdOutlineDeleteOutline } from "react-icons/md";
import ImageUploading from "react-images-uploading";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { addResidentialRent } from "../../store/slices/properties";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  getAllGovernorates,
  selectCountries,
} from "../../store/slices/countries";
import Image from "next/image";

const HosuingRent = () => {
  const { allCountries, allGovernorates } = useSelector(selectCountries);
  const country_options = allCountries;

  const governorate_options = allGovernorates;

  const property_type_options_ar = [
    { value: "palace", label: "قصر" },
    { value: "villa", label: "فيلا" },
    { value: "twin_house", label: "تون هاوس" },
    { value: "pent_house", label: "بنت هاوس" },
    { value: "flat", label: "منزل" },
    { value: "studio", label: "ستوديو" },
    { value: "chalet", label: "شاليه" },
  ];

  const property_type_options_en = [
    { value: "palace", label: "palace" },
    { value: "villa", label: "villa" },
    { value: "twin_house", label: "twin house" },
    { value: "pent_house", label: "pent house" },
    { value: "flat", label: "flat" },
    { value: "studio", label: "studio" },
    { value: "chalet", label: "chalet" },
  ];

  const furniture_type_options_ar = [
    { value: "furnished", label: "تشطيب" },
    { value: "unfurnished", label: "بدون تشطيب" },
  ];

  const furniture_type_options_en = [
    { value: "furnished", label: "furnished" },
    { value: "unfurnished", label: "unfurnished" },
  ];

  const currency_options_ar = [
    { value: "USD", label: "دولار أمريكي" },
    { value: "AED", label: "درهم إماراتي" },
    { value: "EGP", label: "جنيه مصري" },
    { value: "GBP", label: "جنيه إسترليني" },
    { value: "QAR", label: "ريال قطري" },
    { value: "SAR", label: "ريال سعودي" },
    { value: "EURO", label: "يورو " },
    { value: "KWD", label: "دينار كويتي" },
  ];

  const currency_options_en = [
    { value: "USD", label: "Dollar" },
    { value: "AED", label: "AED" },
    { value: "EGP", label: "EGP" },
    { value: "GBP", label: "GBP" },
    { value: "QAR", label: "QAR" },
    { value: "SAR", label: "SAR" },
    { value: "EURO", label: "EURO" },
    { value: "KWD", label: "KWD" },
  ];

  const installment_type_ar = [
    { value: "monthly", label: "شهريا" },
    { value: "quarterly", label: "كل اربع شهور" },
    { value: "semi-annual", label: "كل 6 شهور" },
    { value: "annual", label: "سنويا" },
  ];

  const installment_type_en = [
    { value: "monthly", label: "monthly" },
    { value: "quarterly", label: "quarterly" },
    { value: "semi-annual", label: "semi-annual" },
    { value: "annual", label: "annual" },
  ];

  const [firstTabVis, setFirstTabVis] = useState(false);
  const [secondTabVis, setSecondTabVis] = useState(false);
  const [thirdTabVis, setThirdTabVis] = useState(false);
  const [fourthTabVis, setFourthTabVis] = useState(false);
  const [fifthTabVis, setFifthTabVis] = useState(false);
  const [sixthTabVis, setSixthTabVis] = useState(false);
  const [seventhTabVis, setSeventhTabVis] = useState(false);
  const [tenTabVis, setTenTabVis] = useState(false);
  const [eighthTabVis, setEighthTabVis] = useState(false);
  const [ninthTabVis, setNinthTabVis] = useState(false);
  const [elevenTabVis, setElevenTabVis] = useState(false);

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

  const [property_type, setProperty_type] = useState("");
  const [furniture_type, setFurniture_type] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [city, setCity] = useState("");
  const [total_area, setTotal_area] = useState("");
  const [building_area, setBuilding_area] = useState("");
  const [garden_area, setGarden_area] = useState("");
  const [no_bed_room, setNo_bed_room] = useState("");
  const [no_bath_room, setNo_bath_room] = useState("");
  const [no_kitchen, setNo_kitchen] = useState("");
  const [no_reception, setNo_reception] = useState("");
  const [no_dressing, setNo_dressing] = useState("");
  const [no_roof, setNo_roof] = useState("");
  const [compound_name, setCompound_name] = useState("");
  const [private_garden, setPrivate_garden] = useState(false);
  const [private_parking, setPrivate_parking] = useState(false);
  const [private_pool, setPrivate_pool] = useState(false);
  const [lift, setLift] = useState(false);
  const [security, setSecurity] = useState(false);
  const [public_pool, setPublic_pool] = useState(false);
  const [public_garden, setPublic_garden] = useState("");
  const [walls, setWalls] = useState("");
  const [floors, setFloors] = useState("");
  const [ceilings, setCeilings] = useState("");
  const [bath_rooms, setBath_rooms] = useState("");
  const [kitchen, setKitchen] = useState("");
  const [light_system, setLight_system] = useState("");
  const [air_conditioners, setAir_conditioners] = useState("");
  const [internet, setInternet] = useState("");

  const [rent_price, setRent_price] = useState("");
  const [insurance, setInsurance] = useState("");
  const [commission, setCommission] = useState("");
  const [currency, setCurrency] = useState("");

  const [school, setSchool] = useState("");
  const [hospital, setHospital] = useState("");
  const [nursery_school, setNursery_school] = useState("");
  const [mall, setMall] = useState("");
  const [pharmacy, setPharmacy] = useState("");
  const [super_market, setSuper_market] = useState("");
  const [street_view_iframe, setStreet_view_iframe] = useState("");
  const [general_details, setGeneral_details] = useState("");
  const [unit_status, setUnit_status] = useState("");
  const [unit_age, setUnit_age] = useState("");
  const [pdf, setPdf] = useState([]);
  const [view3d, setView3d] = useState("");
  const [youtube, setYoutube] = useState("");
  const [location, setLocation] = useState("");
  const [pdfImage, setPdfImage] = useState([]);
  const [images, setImages] = useState([]);
  const [pImages, setPImages] = useState([]);
  const [gardenIn, setGardenIn] = useState(false);
  const maxNumber = 12;
  const maxFileSize = 1048576;

  const dispatch = useDispatch();

  const onChange = (imageList, addUpdateIndex) => {
    const newArray = imageList.map(
      ({ data_url, ...keepAttrs }) => keepAttrs.file
    );
    setPImages(newArray);
    setImages(imageList);
  };

  const pdfOnChange = (imageList, addUpdateIndex) => {
    const newArray = imageList.map(
      ({ data_url, ...keepAttrs }) => keepAttrs.file
    );

    if (!imageList.length) {
      setPdfImage(newArray);
      setPdf([]);
    } else {
      setPdfImage(imageList[0].file);
      setPdf(imageList);
    }
  };

  const router = useRouter();
  const [showLoading, setShowLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [showLoading]);

  const handelAddProperty = (e) => {
    e.preventDefault();
    setShowLoading(true);
    dispatch(addResidentialRent(data)).then((res) => {
      if (res.payload.success) {
        setShowLoading(false);
        setShowSuccess(true);
        toast.success(res.payload.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        for (let error in res.payload.errors) {
          setShowLoading(false);
          toast.error(res.payload.errors[error].toString(), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      }
    });
  };

  let data = {
    property_type: property_type.value,
    furniture_type: furniture_type.value,
    address,
    country: country.value,
    governorate: governorate.value,
    city,
    total_area,
    building_area,
    garden_area,
    no_bed_room,
    no_bath_room,
    no_kitchen,
    no_reception,
    no_dressing,
    no_roof,
    compound_name,
    private_garden,
    private_parking,
    private_pool,
    lift,
    security,
    public_pool,
    public_garden,
    walls,
    floors,
    ceilings,
    bath_rooms,
    kitchen,
    light_system,
    air_conditioners,
    internet,
    rent_price,
    insurance,
    commission,
    currency: currency.value,
    school,
    hospital,
    nursery_school,
    mall,
    pharmacy,
    super_market,
    street_view_iframe,
    general_details,
    // unit_status,
    unit_age,
    pdf: pdfImage,
    view3d,
    youtube,
    location,
    images: pImages,
  };

  useEffect(() => {
    setAdvance_payment(advance_payment.replace("%", "") + "%");
  }, [advance_payment]);

  const { locale } = router;

  const [showFinishingTab, setShowFinishingTab] = useState(
    furniture_type.value === "furnished" ? true : false
  );

  useEffect(() => {
    setShowFinishingTab(furniture_type.value === "furnished" ? true : false);
  }, [furniture_type]);

  // Validation
  useEffect(() => {
    if (country) {
      const data = { activeCountry: country.value, locale };
      dispatch(getAllGovernorates(data));
    }
  }, [country]);

  return (
    <>
      <div className="tab-item">
        <div className="">
          <form onSubmit={(e) => handelAddProperty(e)}>
            <div className="add-form-tabs">
              <div className={`${firstTabVis ? "" : "collapsed"}`}>
                <div
                  className="aft-one-item aft-item"
                  onClick={() => setFirstTabVis(!firstTabVis)}
                >
                  <h3>
                    <FormattedMessage id="page.add-property-form-title.add-details" />
                  </h3>
                  <MdOutlineKeyboardArrowDown />
                </div>
                <div className="aft-one-content aft-content">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.property-type" />
                        </label>
                        <Select
                          styles={selectStyle}
                          isShow={true}
                          placeholder={
                            <FormattedMessage id="page.home.auth.properties.filter.select_property_type" />
                          }
                          value={property_type}
                          onChange={setProperty_type}
                          name="currency"
                          id="place_type_select"
                          options={
                            locale === "ar"
                              ? property_type_options_ar
                              : property_type_options_en
                          }
                          instanceId="place_type_select"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.country" />
                        </label>
                        <Select
                          styles={selectStyle}
                          isShow={true}
                          placeholder={
                            <FormattedMessage id="page.home.auth.properties.filter.location_country" />
                          }
                          value={country}
                          onChange={setCountry}
                          name="country"
                          id="country_type_select"
                          options={country_options}
                          instanceId="country_type_select"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.property-name-and-id" />
                        </label>
                        <input
                          type="text"
                          value={compound_name}
                          onChange={(e) => setCompound_name(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.total-area" />
                        </label>
                        <input
                          type="text"
                          value={total_area}
                          onChange={(e) => setTotal_area(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.beds-room" />
                        </label>
                        <div className="numbers-group">
                          <div
                            className={`num-box ${
                              no_bed_room === 1 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_bed_room(1) : ""
                              }
                              className="form-control"
                            />
                            <span>1</span>
                          </div>
                          <div
                            className={`num-box ${
                              no_bed_room === 2 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_bed_room(2) : ""
                              }
                              className="form-control"
                            />
                            <span>2</span>
                          </div>
                          <div
                            className={`num-box ${
                              no_bed_room === 3 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_bed_room(3) : ""
                              }
                              className="form-control"
                            />
                            <span>3</span>
                          </div>
                          <div
                            className={`num-box ${
                              no_bed_room === 4 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_bed_room(4) : ""
                              }
                              className="form-control"
                            />
                            <span>4</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.reception-room" />
                        </label>
                        <div className="numbers-group">
                          <div
                            className={`num-box ${
                              no_reception === 1 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_reception(1) : ""
                              }
                              className="form-control"
                            />
                            <span>1</span>
                          </div>
                          <div
                            className={`num-box ${
                              no_reception === 2 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_reception(2) : ""
                              }
                              className="form-control"
                            />
                            <span>2</span>
                          </div>
                          <div
                            className={`num-box ${
                              no_reception === 3 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_reception(3) : ""
                              }
                              className="form-control"
                            />
                            <span>3</span>
                          </div>
                          <div
                            className={`num-box ${
                              no_reception === 4 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_reception(4) : ""
                              }
                              className="form-control"
                            />
                            <span>4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.finishing" />
                        </label>
                        <Select
                          styles={selectStyle}
                          placeholder={
                            <FormattedMessage id="page.add-property-form.details.finishing_type" />
                          }
                          value={furniture_type}
                          onChange={setFurniture_type}
                          name="furniture"
                          id="furniture_type_select"
                          options={
                            locale === "ar"
                              ? furniture_type_options_ar
                              : furniture_type_options_en
                          }
                          instanceId="furniture_type_select"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.goverment" />
                        </label>
                        <Select
                          styles={selectStyle}
                          isShow={true}
                          placeholder={
                            <FormattedMessage id="page.home.auth.properties.filter.location_governorate" />
                          }
                          value={governorate}
                          onChange={setGovernorate}
                          name="governorate"
                          id="governorate_type_select"
                          options={governorate_options}
                          instanceId="governorate_type_select"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.address" />
                        </label>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.building-area-size" />
                        </label>
                        <input
                          type="number"
                          value={building_area}
                          onChange={(e) => setBuilding_area(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.kitchen" />
                        </label>

                        <div className="numbers-group">
                          <div
                            className={`num-box ${
                              no_kitchen === 1 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_kitchen(1) : ""
                              }
                              className="form-control"
                            />
                            <span>1</span>
                          </div>
                          <div
                            className={`num-box ${
                              no_kitchen === 2 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_kitchen(2) : ""
                              }
                              className="form-control"
                            />
                            <span>2</span>
                          </div>
                          <div
                            className={`num-box ${
                              no_kitchen === 3 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_kitchen(3) : ""
                              }
                              className="form-control"
                            />
                            <span>3</span>
                          </div>
                          <div
                            className={`num-box ${
                              no_kitchen === 4 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_kitchen(4) : ""
                              }
                              className="form-control"
                            />
                            <span>4</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.bath-room" />
                        </label>

                        <div className="numbers-group">
                          <div
                            className={`num-box ${
                              no_bath_room === 1 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_bath_room(1) : ""
                              }
                              className="form-control"
                            />
                            <span>1</span>
                          </div>
                          <div
                            className={`num-box ${
                              no_bath_room === 2 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_bath_room(2) : ""
                              }
                              className="form-control"
                            />
                            <span>2</span>
                          </div>
                          <div
                            className={`num-box ${
                              no_bath_room === 3 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_bath_room(3) : ""
                              }
                              className="form-control"
                            />
                            <span>3</span>
                          </div>
                          <div
                            className={`num-box ${
                              no_bath_room === 4 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_bath_room(4) : ""
                              }
                              className="form-control"
                            />
                            <span>4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.city" />
                        </label>
                        <input
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.building-stutus" />
                        </label>
                        <input
                          value={unit_status}
                          onChange={(e) => setUnit_status(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.building-age" />
                        </label>
                        <input
                          type="text"
                          value={unit_age}
                          onChange={(e) => setUnit_age(e.target.value)}
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.roof" />
                        </label>
                        <input
                          type="number"
                          value={no_roof}
                          onChange={(e) => setNo_roof(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.dressing" />
                        </label>

                        <div className="numbers-group">
                          <div
                            className={`num-box ${
                              no_dressing === 1 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_dressing(1) : ""
                              }
                              className="form-control"
                            />
                            <span>1</span>
                          </div>
                          <div
                            className={`num-box ${
                              no_dressing === 2 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_dressing(2) : ""
                              }
                              className="form-control"
                            />
                            <span>2</span>
                          </div>
                          <div
                            className={`num-box ${
                              no_dressing === 3 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_dressing(3) : ""
                              }
                              className="form-control"
                            />
                            <span>3</span>
                          </div>
                          <div
                            className={`num-box ${
                              no_dressing === 4 ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="beds"
                              onChange={(e) =>
                                e.target.checked ? setNo_dressing(4) : ""
                              }
                              className="form-control"
                            />
                            <span>4</span>
                          </div>
                        </div>
                      </div>
                      {gardenIn && (
                        <div className="form-group">
                          <label htmlFor="">
                            <FormattedMessage id="page.add-property-form.details.garden-area-size" />
                          </label>
                          <input
                            type="number"
                            value={garden_area}
                            onChange={(e) => setGarden_area(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      )}
                    </div>
                    <div className="col-md-12">
                      <div className="form-checkboxs">
                        <div className="form-group custom-checkbox">
                          <div className="cb-item">
                            <label htmlFor="">
                              <FormattedMessage id="page.add-property-form.details.private-parking" />
                            </label>
                            <input
                              type="checkbox"
                              value={private_parking}
                              onChange={(e) =>
                                setPrivate_parking(e.target.checked)
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group custom-checkbox">
                          <div className="cb-item">
                            <label htmlFor="">
                              <FormattedMessage id="page.add-property-form.details.private-pool" />
                            </label>
                            <input
                              type="checkbox"
                              value={private_pool}
                              onChange={(e) =>
                                setPrivate_pool(e.target.checked)
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group custom-checkbox">
                          <div className="cb-item">
                            <label htmlFor="">
                              <FormattedMessage id="page.add-property-form.details.left" />
                            </label>
                            <input
                              type="checkbox"
                              value={lift}
                              onChange={(e) => setLift(e.target.checked)}
                            />
                          </div>
                        </div>
                        <div className="form-group custom-checkbox">
                          <div className="cb-item">
                            <label htmlFor="">
                              <FormattedMessage id="page.add-property-form.details.public-garden" />
                            </label>
                            <input
                              type="checkbox"
                              value={public_garden}
                              onChange={(e) =>
                                setPublic_garden(e.target.checked)
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group custom-checkbox">
                          <div className="cb-item">
                            <label htmlFor="">
                              <FormattedMessage id="page.add-property-form.details.private-garden" />
                            </label>
                            <input
                              type="checkbox"
                              value={private_garden}
                              onChange={(e) => {
                                setPrivate_garden(e.target.checked);
                                setGardenIn(!gardenIn);
                              }}
                            />
                          </div>
                        </div>
                        <div className="form-group custom-checkbox">
                          <div className="cb-item">
                            <label htmlFor="">
                              <FormattedMessage id="page.add-property-form.details.security" />
                            </label>
                            <input
                              type="checkbox"
                              value={security}
                              onChange={(e) => setSecurity(e.target.checked)}
                            />
                          </div>
                        </div>
                        <div className="form-group custom-checkbox">
                          <div className="cb-item">
                            <label htmlFor="">
                              <FormattedMessage id="page.add-property-form.details.public_pool" />
                            </label>
                            <input
                              type="checkbox"
                              value={public_pool}
                              onChange={(e) => setPublic_pool(e.target.checked)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${secondTabVis ? "" : "collapsed"}`}>
                <div
                  className="aft-two-item aft-item"
                  onClick={() => setSecondTabVis(!secondTabVis)}
                >
                  <h3>
                    <FormattedMessage id="page.add-property-form-title.payment.type" />
                  </h3>
                  <MdOutlineKeyboardArrowDown />
                </div>
                <div className="aft-two-content aft-content">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.rent_price" />
                        </label>
                        <input
                          value={rent_price}
                          onChange={(e) => setRent_price(e.target.value)}
                          type="number"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.commission" />
                        </label>
                        <input
                          value={commission}
                          onChange={(e) => setCommission(e.target.value)}
                          type="number"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.currency" />
                        </label>
                        <Select
                          styles={selectStyle}
                          isShow={true}
                          placeholder={
                            <FormattedMessage id="page.add-property-form.details.currency_type" />
                          }
                          value={currency}
                          onChange={setCurrency}
                          name="currency"
                          id="currency_type_select"
                          options={
                            locale === "ar"
                              ? currency_options_ar
                              : currency_options_en
                          }
                          instanceId="currency_type_select"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.insurance" />
                        </label>
                        <input
                          type="number"
                          value={insurance}
                          onChange={(e) => setInsurance(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${fifthTabVis ? "" : "collapsed"}`}>
                <div
                  className="aft-four-item aft-item"
                  onClick={() => setFifthTabVis(!fifthTabVis)}
                >
                  <h3>
                    <FormattedMessage id="page.add-property-form-title.add-images" />
                  </h3>
                  <MdOutlineKeyboardArrowDown />
                </div>
                <div className="aft-four-content aft-content">
                  <div className="image-uploader-box">
                    <ImageUploading
                      value={images}
                      onChange={onChange}
                      maxNumber={maxNumber}
                      maxFileSize={maxFileSize}
                      dataURLKey="data_url"
                      multiple
                    >
                      {({
                        imageList,
                        onImageRemoveAll,
                        errors,
                        onImageUpload,
                        onImageUpdate,
                        onImageRemove,
                        dragProps,
                      }) => (
                        // write your building UI
                        <>
                          <div className="upload__image-wrapper">
                            {images.length < 1 && (
                              <div
                                className="drag-box"
                                onClick={onImageUpload}
                                {...dragProps}
                              >
                                <FiUploadCloud />
                                <span>
                                  <FormattedMessage id="section.profile.drag_and_drop" />
                                </span>
                                <button type="button">
                                  <FormattedMessage id="section.profile.browse_files" />
                                </button>
                              </div>
                            )}
                            <div className="upladed_images_box">
                              {imageList.length > 1 && (
                                <button onClick={onImageRemoveAll}>
                                  Remove all images
                                </button>
                              )}
                              {imageList.map((image, index) => (
                                <div
                                  key={index}
                                  className="uploadThumb image-item"
                                  id="result"
                                >
                                  <img
                                    src={image["data_url"]}
                                    alt=""
                                    width="100"
                                  />

                                  <div className="image-item__btn-wrapper">
                                    <button
                                      type="button"
                                      onClick={() => onImageUpdate(index)}
                                    >
                                      <FiEdit2 />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => onImageRemove(index)}
                                    >
                                      <MdOutlineDeleteOutline />
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          {errors && (
                            <>
                              {errors.maxNumber &&
                                toast.error(
                                  "Number of selected images exceed maxNumber",
                                  {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                  }
                                )}
                              {errors.acceptType &&
                                toast.error(
                                  "Your selected file type is not allow",
                                  {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                  }
                                )}
                              {errors.maxFileSize &&
                                toast.error(
                                  "Selected file size exceed maxFileSize",
                                  {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                  }
                                )}
                            </>
                          )}
                        </>
                      )}
                    </ImageUploading>
                  </div>
                </div>
              </div>

              {showFinishingTab && (
                <div className={`${thirdTabVis ? "" : "collapsed"}`}>
                  <div
                    className="aft-three-item aft-item"
                    onClick={() => setThirdTabVis(!thirdTabVis)}
                  >
                    <h3>
                      <FormattedMessage id="page.add-property-form-title.finishing" />
                    </h3>
                    <div>
                      <span>
                        <FormattedMessage id="page.add-property-form.option" />
                      </span>
                      <MdOutlineKeyboardArrowDown />
                    </div>
                  </div>
                  <div className="aft-three-content aft-content">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label htmlFor="">
                            <FormattedMessage id="page.add-property-form.details.walls" />
                          </label>
                          <input
                            type="text"
                            value={walls}
                            onChange={(e) => setWalls(e.target.value)}
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">
                            <FormattedMessage id="page.add-property-form.details.floors" />
                          </label>
                          <input
                            type="text"
                            value={floors}
                            onChange={(e) => setFloors(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label htmlFor="">
                            <FormattedMessage id="page.add-property-form.details.ceilings" />
                          </label>
                          <input
                            type="text"
                            value={ceilings}
                            onChange={(e) => setCeilings(e.target.value)}
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">
                            <FormattedMessage id="page.add-property-form.details.bath_rooms" />
                          </label>
                          <input
                            type="text"
                            value={bath_rooms}
                            onChange={(e) => setBath_rooms(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label htmlFor="">
                            <FormattedMessage id="page.add-property-form.details.k-kitchen" />
                          </label>
                          <input
                            type="text"
                            value={kitchen}
                            onChange={(e) => setKitchen(e.target.value)}
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">
                            <FormattedMessage id="page.add-property-form.details.internet" />
                          </label>
                          <input
                            type="text"
                            value={internet}
                            onChange={(e) => setInternet(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label htmlFor="">
                            <FormattedMessage id="page.add-property-form.details.light_system" />
                          </label>
                          <input
                            type="text"
                            value={light_system}
                            onChange={(e) => setLight_system(e.target.value)}
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">
                            <FormattedMessage id="page.add-property-form.details.air_conditioners" />
                          </label>
                          <input
                            type="text"
                            value={air_conditioners}
                            onChange={(e) =>
                              setAir_conditioners(e.target.value)
                            }
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className={`${fourthTabVis ? "" : "collapsed"}`}>
                <div
                  className="aft-four-item aft-item"
                  onClick={() => setFourthTabVis(!fourthTabVis)}
                >
                  <h3>
                    <FormattedMessage id="page.add-property-form-title.nearbly-location" />
                  </h3>
                  <div>
                    <span>
                      <FormattedMessage id="page.add-property-form.option" />
                    </span>
                    <MdOutlineKeyboardArrowDown />
                  </div>
                </div>
                <div className="aft-four-content aft-content">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.school" />
                        </label>
                        <input
                          value={school}
                          onChange={(e) => setSchool(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.mall" />
                        </label>
                        <input
                          type="text"
                          value={mall}
                          onChange={(e) => setMall(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.hospital" />
                        </label>
                        <input
                          value={hospital}
                          onChange={(e) => setHospital(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.pharmacy" />
                        </label>
                        <input
                          value={pharmacy}
                          onChange={(e) => setPharmacy(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.nursery_school" />
                        </label>
                        <input
                          type="text"
                          value={nursery_school}
                          onChange={(e) => setNursery_school(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          <FormattedMessage id="page.add-property-form.details.super_market" />
                        </label>
                        <input
                          value={super_market}
                          onChange={(e) => setSuper_market(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${tenTabVis ? "" : "collapsed"}`}>
                <div
                  className="aft-four-item aft-item"
                  onClick={() => setTenTabVis(!tenTabVis)}
                >
                  <h3>
                    <FormattedMessage id="page.add-property-form-title.add-more-details" />
                  </h3>
                  <div>
                    <span>
                      <FormattedMessage id="page.add-property-form.option" />
                    </span>
                    <MdOutlineKeyboardArrowDown />
                  </div>
                </div>
                <div className="aft-four-content aft-content">
                  <textarea
                    value={general_details}
                    onChange={(e) => setGeneral_details(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className={`${elevenTabVis ? "" : "collapsed"}`}>
                <div
                  className="aft-four-item aft-item"
                  onClick={() => setElevenTabVis(!elevenTabVis)}
                >
                  <h3>
                    <FormattedMessage id="page.add-property-form-title.add-more-view-way" />
                  </h3>
                  <div>
                    <span>
                      <FormattedMessage id="page.add-property-form.option" />
                    </span>
                    <MdOutlineKeyboardArrowDown />
                  </div>
                </div>
                <div className="aft-four-content aft-content">
                  <div className={`${sixthTabVis ? "" : "collapsed"}`}>
                    <div
                      className="aft-four-item aft-item"
                      onClick={() => setSixthTabVis(!sixthTabVis)}
                    >
                      <h3>
                        <FormattedMessage id="page.add-property-form-title.add-3d" />
                      </h3>
                      <div>
                        <span>
                          <FormattedMessage id="page.add-property-form.option" />
                        </span>
                        <MdOutlineKeyboardArrowDown />
                      </div>
                    </div>
                    <div className="aft-four-content aft-content">
                      <textarea
                        value={view3d}
                        onChange={(e) => setView3d(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className={`${seventhTabVis ? "" : "collapsed"}`}>
                    <div
                      className="aft-four-item aft-item"
                      onClick={() => setSeventhTabVis(!seventhTabVis)}
                    >
                      <h3>
                        <FormattedMessage id="page.add-property-form-title.add-map" />
                      </h3>
                      <div>
                        <span>
                          <FormattedMessage id="page.add-property-form.option" />
                        </span>
                        <MdOutlineKeyboardArrowDown />
                      </div>
                    </div>
                    <div className="aft-four-content aft-content">
                      <textarea
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className={`${eighthTabVis ? "" : "collapsed"}`}>
                    <div
                      className="aft-four-item aft-item"
                      onClick={() => setEighthTabVis(!eighthTabVis)}
                    >
                      <h3>
                        <FormattedMessage id="upload.video" />
                      </h3>
                      <div>
                        <span>
                          <FormattedMessage id="page.add-property-form.option" />
                        </span>
                        <MdOutlineKeyboardArrowDown />
                      </div>
                    </div>
                    <div className="aft-four-content aft-content">
                      <div className="note-box" title="ازاي ترفع فيديو؟">
                        <AiOutlineInfo />
                      </div>
                      <input
                        className="video-input"
                        type="text"
                        placeholder={
                          locale === "ar"
                            ? "ادخل الرمز الخاص بالفيديو"
                            : "Enter the video code"
                        }
                        value={youtube}
                        onChange={(e) => setYoutube(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={`${ninthTabVis ? "" : "collapsed"}`}>
                    <div
                      className="aft-four-item aft-item"
                      onClick={() => setNinthTabVis(!ninthTabVis)}
                    >
                      <h3>
                        <FormattedMessage id="upload.pdf" />
                      </h3>
                      <div>
                        <span>
                          <FormattedMessage id="page.add-property-form.option" />
                        </span>
                        <MdOutlineKeyboardArrowDown />
                      </div>
                    </div>
                    <div className="aft-four-content aft-content">
                      <ImageUploading
                        id="pdf"
                        value={pdf}
                        onChange={pdfOnChange}
                        maxNumber={1}
                        maxFileSize={maxFileSize}
                        dataURLKey="data_url_2"
                      >
                        {({
                          imageList,
                          onImageRemoveAll,
                          errors,
                          onImageUpload,
                          onImageUpdate,
                          onImageRemove,
                          dragProps,
                        }) => (
                          // write your building UI
                          <>
                            <div className="upload__image-wrapper">
                              {pdf.length < 1 && (
                                <div
                                  className="drag-box"
                                  onClick={onImageUpload}
                                  {...dragProps}
                                >
                                  <FiUploadCloud />
                                  <span>
                                    <FormattedMessage id="section.profile.drag_and_drop" />
                                  </span>
                                  <button type="button">
                                    <FormattedMessage id="section.profile.browse_files" />
                                  </button>
                                </div>
                              )}
                              <div className="upladed_images_box">
                                {imageList.length > 1 && (
                                  <button onClick={onImageRemoveAll}>
                                    Remove all images
                                  </button>
                                )}
                                {imageList.map((image, index) => (
                                  <div
                                    key={index}
                                    className="uploadThumb image-item"
                                    id="result"
                                  >
                                    <img
                                      src={image["data_url_2"]}
                                      alt=""
                                      width="100"
                                    />

                                    <div className="image-item__btn-wrapper">
                                      <button
                                        type="button"
                                        onClick={() => onImageUpdate(index)}
                                      >
                                        <FiEdit2 />
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => onImageRemove(index)}
                                      >
                                        <MdOutlineDeleteOutline />
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            {errors && (
                              <>
                                {errors.maxNumber &&
                                  toast.error(
                                    locale === "ar"
                                      ? "الحد الاقصى للصورة 1 ميجا"
                                      : "Please select image less than 1Mb",
                                    {
                                      position: "top-right",
                                      autoClose: 5000,
                                      hideProgressBar: false,
                                      closeOnClick: true,
                                      pauseOnHover: true,
                                      draggable: true,
                                      progress: undefined,
                                    }
                                  )}
                                {errors.acceptType &&
                                  toast.error(
                                    locale === "ar"
                                      ? "صيغة الصورة غير صحيحة"
                                      : "Invalid image format",
                                    {
                                      position: "top-right",
                                      autoClose: 5000,
                                      hideProgressBar: false,
                                      closeOnClick: true,
                                      pauseOnHover: true,
                                      draggable: true,
                                      progress: undefined,
                                    }
                                  )}
                              </>
                            )}
                          </>
                        )}
                      </ImageUploading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-btn-box">
              <button>
                <FormattedMessage id="global.upload-property" />
              </button>
            </div>
          </form>
        </div>
      </div>
      {showLoading && (
        <div className="overlay">
          <div className="loading-wrap">
            <div className="loading-icon">
              <Image
                src="/img/uploading-gif.gif"
                width="64"
                height="64"
                alt="uploading-image"
              />
            </div>
            <div className="loading-txt">
              <span>
                <FormattedMessage id="property.loading.message" />
              </span>
            </div>
          </div>
        </div>
      )}
      {showSuccess && (
        <div className="overlay">
          <div className="loading-wrap">
            <div className="loading-icon">
              <Image
                src="/img/success-gif.gif"
                width="64"
                height="64"
                alt="uploading-image"
              />
            </div>
            <div className="loading-txt">
              <span>
                <FormattedMessage id="property.uploaded.message" />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HosuingRent;
