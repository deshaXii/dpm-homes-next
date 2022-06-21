import React, { useState } from "react";
import { FiUploadCloud, FiEdit2 } from "react-icons/fi";
import Select from "react-select";
import { MdOutlineDeleteOutline } from "react-icons/md";
import ImageUploading from "react-images-uploading";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { addResidentialCash } from "../../store/slices/properties";

const HosuingBoth = () => {
  const property_type_options = [
    { value: "palace", label: "palace" },
    { value: "twin_house", label: "twin house" },
    { value: "Villa", label: "Villa" },
    { value: "pent_house", label: "pent house" },
    { value: "flat", label: "flat" },
    { value: "studio", label: "studio" },
    { value: "chalet", label: "chalet" },
  ];

  const furniture_type_options = [
    { value: "furnished", label: "furnished" },
    { value: "unfurnished", label: "unfurnished" },
  ];

  const currency_options = [
    { value: "USD", label: "USD" },
    { value: "EGP", label: "EGP" },
    { value: "GBP", label: "GBP" },
    { value: "QAR", label: "QAR" },
    { value: "SAR", label: "SAR" },
    { value: "EURO", label: "EURO" },
    { value: "KWD", label: "KWD" },
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
  const [total_price, setTotal_price] = useState("");
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
  const [pdf, setPdf] = useState("");
  const [view3d, setView3d] = useState("");
  const [youtube, setYoutube] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);
  const [pImages, setPImages] = useState([]);
  const maxNumber = 12;

  const dispatch = useDispatch();

  const onChange = (imageList, addUpdateIndex) => {
    const newArray = imageList.map(
      ({ data_url, ...keepAttrs }) => keepAttrs.file
    );
    setPImages(newArray[0]);
    setImages(imageList);
  };

  const handelAddProperty = (e) => {
    e.preventDefault();
    dispatch(addResidentialCash(data));
  };

  let data = {
    property_type: property_type.value,
    furniture_type: furniture_type.value,
    address,
    country: 2,
    governorate: 8,
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
    total_price,
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
    images,
  };

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
                <h3>أضف تفاصيل عن العقار</h3>
              </div>
              <div className="aft-one-content aft-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="">نوع الوحدة</label>
                      <Select
                        styles={selectStyle}
                        isShow={true}
                        placeholder="أختر نوع الوحدة"
                        value={property_type}
                        onChange={setProperty_type}
                        name="currency"
                        id="place_type_select"
                        options={property_type_options}
                        instanceId="place_type_select"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">البلد</label>
                      <input
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">المساحة الإجمالية</label>
                      <input
                        type="number"
                        value={total_area}
                        onChange={(e) => setTotal_area(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">رقم وإسم الوحدة</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">غرف النوم</label>
                      <input
                        type="number"
                        value={no_bed_room}
                        onChange={(e) => setNo_bed_room(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">غرفة الاستقبال</label>
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
                      <label htmlFor="">التشطيب</label>
                      <Select
                        styles={selectStyle}
                        placeholder="أختر نوع الوحدة"
                        value={furniture_type}
                        onChange={setFurniture_type}
                        name="furniture"
                        id="furniture_type_select"
                        options={furniture_type_options}
                        instanceId="furniture_type_select"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">المحافظة</label>
                      <input
                        type="text"
                        value={governorate}
                        onChange={(e) => setGovernorate(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">العنوان</label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">مساحة المباني</label>
                      <input
                        type="number"
                        value={building_area}
                        onChange={(e) => setBuilding_area(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">عمر الوحدة</label>
                      <input
                        type="text"
                        value={unit_age}
                        onChange={(e) => setUnit_age(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">الحمام</label>
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
                      <label htmlFor="">غرفة الدريسينج</label>
                      <input
                        type="number"
                        value={no_dressing}
                        onChange={(e) => setNo_dressing(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">مساحة الحديقة</label>
                      <input
                        type="number"
                        value={garden_area}
                        onChange={(e) => setGarden_area(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">المدينة</label>
                      <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">حالة الوحدة</label>
                      <input
                        value={unit_status}
                        onChange={(e) => setUnit_status(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">المطبخ</label>
                      <input
                        type="number"
                        value={no_kitchen}
                        onChange={(e) => setNo_kitchen(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">روف</label>
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
                          <label htmlFor="">باركينج خاص</label>
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
                          <label htmlFor="">حمام سباحة خاص</label>
                          <input
                            type="checkbox"
                            value={private_pool}
                            onChange={(e) => setPrivate_pool(e.target.checked)}
                          />
                        </div>
                      </div>
                      <div className="form-group custom-checkbox">
                        <div className="cb-item">
                          <label htmlFor="">اسانسير</label>
                          <input
                            type="checkbox"
                            value={lift}
                            onChange={(e) => setLift(e.target.checked)}
                          />
                        </div>
                      </div>
                      <div className="form-group custom-checkbox">
                        <div className="cb-item">
                          <label htmlFor="">حديقة عامة</label>
                          <input
                            type="checkbox"
                            value={public_garden}
                            onChange={(e) => setPublic_garden(e.target.checked)}
                          />
                        </div>
                      </div>
                      <div className="form-group custom-checkbox">
                        <div className="cb-item">
                          <label htmlFor="">حديقة خاصه</label>
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
                          <label htmlFor="">امن</label>
                          <input
                            type="checkbox"
                            value={security}
                            onChange={(e) => setSecurity(e.target.checked)}
                          />
                        </div>
                      </div>
                      <div className="form-group custom-checkbox">
                        <div className="cb-item">
                          <label htmlFor="">حمام سباحة عام</label>
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
                <h3>طريقه الدفع والاستلام</h3>
              </div>
              <div className="aft-two-content aft-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="">السعر كاش</label>
                      <input
                        value={total_price}
                        onChange={(e) => setTotal_price(e.target.value)}
                        type="number"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">رسوم النادي</label>
                      <input
                        value={club_fees}
                        onChange={(e) => setClub_fees(e.target.value)}
                        type="number"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="">العملة</label>
                      <Select
                        styles={selectStyle}
                        isShow={true}
                        placeholder="أختر نوع العملة"
                        value={currency}
                        onChange={setCurrency}
                        name="currency"
                        id="currency_type_select"
                        options={currency_options}
                        instanceId="currency_type_select"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">موعد الإستلام</label>
                      <input
                        value={receiving_date}
                        onChange={(e) => setReceiving_date(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="">رسوم الصيانة</label>
                      <input
                        type="number"
                        value={maintenance_fees}
                        onChange={(e) => setMaintenance_fees(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">المقدم</label>
                      <input
                        type="text"
                        value={advance_payment}
                        onChange={(e) => setAdvance_payment(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${thirdTabVis ? "" : "collapsed"}`}>
              <div
                className="aft-three-item aft-item"
                onClick={() => setThirdTabVis(!thirdTabVis)}
              >
                <h3>اضافه حاله التشطيب</h3>
                <span>إختياري</span>
              </div>
              <div className="aft-three-content aft-content">
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="">حوائط</label>
                      <input
                        type="text"
                        value={walls}
                        onChange={(e) => setWalls(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">ارضيات</label>
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
                      <label htmlFor="">اسقف</label>
                      <input
                        type="text"
                        value={ceilings}
                        onChange={(e) => setCeilings(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">حمامات</label>
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
                      <label htmlFor="">مطبخ</label>
                      <input
                        type="text"
                        value={kitchen}
                        onChange={(e) => setKitchen(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">انترنت</label>
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
                      <label htmlFor="">إنارة</label>
                      <input
                        type="text"
                        value={light_system}
                        onChange={(e) => setLight_system(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">تكييف</label>
                      <input
                        type="text"
                        value={air_conditioners}
                        onChange={(e) => setAir_conditioners(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${fourthTabVis ? "" : "collapsed"}`}>
              <div
                className="aft-four-item aft-item"
                onClick={() => setFourthTabVis(!fourthTabVis)}
              >
                <h3>عرض الخدمات القريب</h3>
                <span>إختياري</span>
              </div>
              <div className="aft-four-content aft-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="">مدرسة</label>
                      <input
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">مول</label>
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
                      <label htmlFor="">مستشفي</label>
                      <input
                        value={hospital}
                        onChange={(e) => setHospital(e.target.value)}
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">صيدلية</label>
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
                      <label htmlFor="">حضانة</label>
                      <input
                        type="text"
                        value={nursery_school}
                        onChange={(e) => setNursery_school(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">سوبر ماركت</label>
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

            <div className={`${fifthTabVis ? "" : "collapsed"}`}>
              <div
                className="aft-four-item aft-item"
                onClick={() => setFifthTabVis(!fifthTabVis)}
              >
                <h3>إضافة صور العقار</h3>
              </div>
              <div className="aft-four-content aft-content">
                <div className="image-uploader-box">
                  <ImageUploading
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    multiple
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageUpdate,
                      onImageRemove,
                      dragProps,
                    }) => (
                      // write your building UI
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
                          {imageList.map((image, index) => (
                            <div
                              key={index}
                              className="uploadThumb image-item"
                              id="result"
                            >
                              <img src={image["data_url"]} alt="" width="100" />

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
                    )}
                  </ImageUploading>
                </div>
              </div>
            </div>

            <div className={`${sixthTabVis ? "" : "collapsed"}`}>
              <div
                className="aft-four-item aft-item"
                onClick={() => setSixthTabVis(!sixthTabVis)}
              >
                <h3>إضافة عرض 3D </h3>
                <span>إختياري</span>
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
                <h3>إضافة عرض الخريطة </h3>
                <span>إختياري</span>
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
                <h3>إضافة تفاصيل اخري </h3>
                <span>إختياري</span>
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
            <button>رفع العقار</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HosuingBoth;
