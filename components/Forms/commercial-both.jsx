import React, { useState, useEffect } from "react";
import { FiUploadCloud, FiEdit2 } from "react-icons/fi";
import Select from "react-select";
import { MdOutlineDeleteOutline } from "react-icons/md";
import ImageUploading from "react-images-uploading";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { addCommercialBoth } from "../../store/slices/properties";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  getAllGovernorates,
  selectCountries,
} from "../../store/slices/countries";

const CommercialBoth = () => {
  const { allCountries, allGovernorates } = useSelector(selectCountries);
  const country_options = allCountries;

  const governorate_options = allGovernorates;
  const property_type_options_ar = [
    { value: "shop", label: "محل" },
    { value: "factory", label: "مصنع" },
    { value: "land", label: "قطعة ارض" },
    { value: "warehouse", label: "مخزن" },
    { value: "playground", label: "ملعب" },
    { value: "pharmacy", label: "صيدلية" },
    { value: "mall", label: "مول" },
  ];

  const property_type_options_en = [
    { value: "shop", label: "shop" },
    { value: "factory", label: "factory" },
    { value: "land", label: "land" },
    { value: "warehouse", label: "warehouse" },
    { value: "playground", label: "playground" },
    { value: "pharmacy", label: "pharmacy" },
    { value: "mall", label: "mall" },
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


  const buildingOptions_ar = [
    { value: "inside_administrative_building", label: "داخل مبني إداري" },
    { value: "inside_commercial_building", label: "داخل مبني تجاري" },
    { value: "inside_hotel", label: "داخل فندق" },
    { value: "in_public_street", label: "في الشارع العام" },
    { value: "inside_compound", label: "داخل كمبوند" },
    { value: "inside_mall", label: "داخل مول" },
  ];

  const buildingOptions_en = [
    {
      value: "inside_administrative_building",
      label: "inside administrative building",
    },
    {
      value: "inside_commercial_building",
      label: "inside commercial building",
    },
    { value: "inside_hotel", label: "inside hotel" },
    { value: "in_public_street", label: "in public street" },
    { value: "inside_compound", label: "inside compound" },
    { value: "inside_mall", label: "inside mall" },
  ];

  const [firstTabVis, setFirstTabVis] = useState(false);
  const [secondTabVis, setSecondTabVis] = useState(false);
  const [thirdTabVis, setThirdTabVis] = useState(false);
  const [fourthTabVis, setFourthTabVis] = useState(false);
  const [fifthTabVis, setFifthTabVis] = useState(false);
  const [sixthTabVis, setSixthTabVis] = useState(false);
  const [seventhTabVis, setSeventhTabVis] = useState(false);
  const [eighthTabVis, setEighthTabVis] = useState(false);
  const [ninthTabVis, setNinthTabVis] = useState(false);

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
  const [building_name, setBuilding_name] = useState("");

  const [total_price, setTotal_price] = useState("");
  const [total_price_installment, setTotal_price_installment] = useState("");
  const [installment, setInstallment] = useState("");
  const [installment_time, setInstallment_time] = useState("");
  const [installment_type, setIynstallment_type] = useState("");

  const [advance_payment, setAdvance_payment] = useState("");
  const [maintenance_fees, setMaintenance_fees] = useState("");
  const [club_fees, setClub_fees] = useState("");
  const [currency, setCurrency] = useState("");

  const [receiving_date, setReceiving_date] = useState("");
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
  const [pdf, setPdf] = useState(null);
  const [view3d, setView3d] = useState(null);
  const [youtube, setYoutube] = useState(null);
  const [location, setLocation] = useState(null);
  const [images, setImages] = useState([]);
  const [pImages, setPImages] = useState([]);
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

  const router = useRouter();

  const handelAddProperty = (e) => {
    e.preventDefault();
    dispatch(addCommercialBoth(data)).then((res) => {
      if (res.payload.success) {
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
    total_price,
    total_price_installment,
    installment,
    installment_time,
    building_name: building_name.value,
    installment_type: installment_type.value,
    advance_payment,
    maintenance_fees,
    club_fees,
    currency: currency.value,
    receiving_date,
    school,
    hospital,
    nursery_school,
    mall,
    pharmacy,
    super_market,
    street_view_iframe,
    general_details,
    unit_status,
    unit_age,
    pdf,
    view3d,
    youtube,
    location,
    images: pImages,
  };

  const { locale } = router;


  // Validation
  useEffect(() => {
    if (country) {
      const data = { activeCountry: country.value, locale };
      dispatch(getAllGovernorates(data));
    }
  }, [country]);

  return (
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
                        type="number"
                        value={total_area}
                        onChange={(e) => setTotal_area(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">
                        <FormattedMessage id="page.add-property-form.details.total-price" />
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">
                        <FormattedMessage id="page.add-property-form.details.beds-room" />
                      </label>
                      <input
                        type="number"
                        value={no_bed_room}
                        onChange={(e) => setNo_bed_room(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">
                        <FormattedMessage id="page.add-property-form.details.reception-room" />
                      </label>
                      <input
                        value={no_reception}
                        onChange={(e) => setNo_reception(e.target.value)}
                        type="number"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                  <div className="form-group">
                      <label htmlFor="">
                        <FormattedMessage id="page.add-property-form.details.building_name" />
                      </label>
                      <Select
                        styles={selectStyle}
                        isShow={true}
                        placeholder={
                          <FormattedMessage id="page.home.auth.properties.building_name_label" />
                        }
                        value={building_name}
                        onChange={setBuilding_name}
                        name="building_name"
                        id="building_name_type_select"
                        options={
                          locale === "ar"
                            ? buildingOptions_ar
                            : buildingOptions_en
                        }
                        instanceId="building_name_type_select"
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
                        <FormattedMessage id="page.add-property-form.details.bath-room" />
                      </label>
                      <input
                        type="number"
                        value={no_bath_room}
                        className="form-control"
                        onChange={(e) => setNo_bath_room(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="">
                        <FormattedMessage id="page.add-property-form.details.dressing" />
                      </label>
                      <input
                        type="number"
                        value={no_dressing}
                        onChange={(e) => setNo_dressing(e.target.value)}
                        className="form-control"
                      />
                    </div>
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
                        <FormattedMessage id="page.add-property-form.details.kitchen" />
                      </label>
                      <input
                        type="number"
                        value={no_kitchen}
                        onChange={(e) => setNo_kitchen(e.target.value)}
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
                            onChange={(e) => setPrivate_pool(e.target.checked)}
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
                            onChange={(e) => setPublic_garden(e.target.checked)}
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
                            onChange={(e) =>
                              setPrivate_garden(e.target.checked)
                            }
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
                        <FormattedMessage id="page.add-property-form.details.cash-total_price" />
                      </label>
                      <input
                        value={total_price}
                        onChange={(e) =>
                          setTotal_price(e.target.value)
                        }
                        type="number"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">
                        <FormattedMessage id="page.add-property-form.details.total_price_installment" />
                      </label>
                      <input
                        value={total_price_installment}
                        onChange={(e) =>
                          setTotal_price_installment(e.target.value)
                        }
                        type="number"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">
                        <FormattedMessage id="page.add-property-form.details.club_fee" />
                      </label>
                      <input
                        value={club_fees}
                        onChange={(e) => setClub_fees(e.target.value)}
                        type="number"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="">
                        <FormattedMessage id="page.add-property-form.details.installment" />
                      </label>
                      <input
                        value={installment}
                        onChange={(e) => setInstallment(e.target.value)}
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
                    <div className="form-group">
                      <label htmlFor="">
                        <FormattedMessage id="page.add-property-form.details.receiving_date" />
                      </label>
                      <input
                        value={receiving_date}
                        onChange={(e) => setReceiving_date(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">
                        <FormattedMessage id="page.add-property-form.details.installment_time" />
                      </label>
                      <input
                        value={installment_time}
                        onChange={(e) => setInstallment_time(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="">
                        <FormattedMessage id="page.add-property-form.details.maintenance_fee" />
                      </label>
                      <input
                        type="number"
                        value={maintenance_fees}
                        onChange={(e) => setMaintenance_fees(e.target.value)}
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="">
                        <FormattedMessage id="page.add-property-form.details.advance" />
                      </label>
                      <input
                        type="text"
                        value={advance_payment}
                        onChange={(e) => setAdvance_payment(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">
                        <FormattedMessage id="page.add-property-form.details.installment_type" />
                      </label>
                      <Select
                        styles={selectStyle}
                        isShow={true}
                        placeholder={
                          <FormattedMessage id="page.home.auth.properties.filter.select_property_type" />
                        }
                        value={installment_type}
                        onChange={setIynstallment_type}
                        name="currency"
                        id="installment_type_select"
                        options={
                          locale === "ar"
                            ? installment_type_ar
                            : installment_type_en
                        }
                        instanceId="installment_type_select"
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
          </div>
          <div className="form-btn-box">
            <button>
              <FormattedMessage id="global.upload-property" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommercialBoth;
