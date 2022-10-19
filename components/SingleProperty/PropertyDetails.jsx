import React, { useState } from "react";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectProperties } from "../../store/slices/properties";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

const PropertyDetails = () => {

  
  const [detailsCollapsed, setDetailsCollapsed] = useState(false);
  const [amenitiesCollapsed, setAmenitiesCollapsed] = useState(true);
  const [paymentCollapsed, setPaymentCollapsed] = useState(true);
  const [finishingCollapsed, setFinishingCollapsed] = useState(true);
  const [moreDetailsCollapsed, setMoreDetailsCollapsed] = useState(true);
  const { property } = useSelector(selectProperties);
  const router = useRouter();
  const { locale } = router;
  
    console.log(property.data.general_details)

  const property_type_options_ar = [
    { value: "palace", label: "قصر" },
    { value: "villa", label: "فيلا" },
    { value: "twin_house", label: "تون هاوس" },
    { value: "apartment", label: "شقه" },
    { value: "pent_house", label: "بنت هاوس" },
    { value: "flat", label: "منزل" },
    { value: "studio", label: "ستوديو" },
    { value: "duplex", label: "دوبلكس" },
    { value: "chalet", label: "شاليه" },
    { value: "shop", label: "محل" },
    { value: "factory", label: "مصنع" },
    { value: "land", label: "قطعة ارض" },
    { value: "warehouse", label: "مخزن" },
    { value: "playground", label: "ملعب" },
    { value: "pharmacy", label: "صيدلية" },
    { value: "farm", label: "مزرعه" },
    { value: "mall", label: "مول" },
    { value: "outlet", label: "مركز تسوق" },
  ];

  const property_type_options_en = [
    { value: "palace", label: "palace" },
    { value: "villa", label: "villa" },
    { value: "twin_house", label: "twin house" },
    { value: "pent_house", label: "pent house" },
    { value: "apartment", label: "apartment" },
    { value: "flat", label: "flat" },
    { value: "studio", label: "studio" },
    { value: "duplex", label: "duplex" },
    { value: "chalet", label: "chalet" },
    { value: "shop", label: "shop" },
    { value: "factory", label: "factory" },
    { value: "land", label: "land" },
    { value: "warehouse", label: "warehouse" },
    { value: "farm", label: "farm" },
    { value: "playground", label: "playground" },
    { value: "pharmacy", label: "pharmacy" },
    { value: "mall", label: "mall" },
    { value: "outlet", label: "outlet" },
    { value: "offices", label: "offices" },
  ];

  if (property.data.currency === "AED") {
    var formatterAED = new Intl.NumberFormat(`en-eg`, {
      style: "currency",
      currency: "AED",
    });
  } else if (property.data.currency === "EGP") {
    var formatterEGP = new Intl.NumberFormat(`en-eg`, {
      style: "currency",
      currency: "EGP",
    });
  } else if (property.data.currency === "USD") {
    var formatterUSD = new Intl.NumberFormat(`en-eg`, {
      style: "currency",
      currency: "USD",
    });
  } else if (property.data.currency === "EURO") {
    var formatterEURO = new Intl.NumberFormat(`en-eg`, {
      style: "currency",
      currency: "EUR",
    });
  }

  const convertAreaSize = (size, country) => {
    if (country === "United Arab Emirates") {
      return `${(size / 3.2808).toFixed(3)} ${locale == "ar" ? "قدم" : "ft"}`;
    } else {
      return `${size} ${locale === "ar" ? "متر" : "m"}`;
    }
  };

  return (
    <section className="property-details p50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Details */}
            <div
              className={`details-inner-box ${
                detailsCollapsed ? "collapsed" : ""
              }`}
            >
              <div
                className="section-inner-title"
                onClick={() => setDetailsCollapsed(!detailsCollapsed)}
              >
                <MdOutlineArrowDropUp />
                <h4>
                  {" "}
                  <FormattedMessage id="page.property.details.title" />{" "}
                </h4>
              </div>
              <div className="property-details-inner">
                {property.data.licence && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.licence" />:
                    </div>
                    <div className="pdi-value">
                      {property.data.licence == "housing"
                        ? locale == "en"
                          ? "Housing"
                          : "سكني"
                        : ""}
                      {property.data.licence == "commercial"
                        ? locale == "en"
                          ? "Commercial"
                          : "تجاري"
                        : ""}
                      {property.data.licence == "administrative"
                        ? locale == "en"
                          ? "Administrative"
                          : "إداري"
                        : ""}
                    </div>
                  </div>
                )}

                {property.data.property_type && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.property_type" />
                      :
                    </div>
                    <div className="pdi-value">
                      {property.data.property_type}
                    </div>
                  </div>
                )}

                {property.data.furniture_type && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.furniture_type" />
                      :
                    </div>
                    <div className="pdi-value">
                      {property.data.furniture_type == "furnished"
                        ? locale == "en"
                          ? "Yes"
                          : "متوفر"
                        : ""}

                      {property.data.furniture_type == "unfurnished"
                        ? locale == "en"
                          ? "NO"
                          : " غير متوفر"
                        : ""}
                    </div>
                  </div>
                )}

                {property.data.unit_status && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.unit_status" />
                      :
                    </div>
                    <div className="pdi-value">{property.data.unit_status}</div>
                  </div>
                )}

                {property.data.payment_type && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.payment_type" />
                      :
                    </div>
                    <div className="pdi-value">
                      {property.data.payment_type == "both"
                        ? locale == "en"
                          ? "Cash & Installment"
                          : " كاش أو نقسيط"
                        : ""}
                    </div>
                  </div>
                )}

                {property.data.country && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.country" />:
                    </div>
                    <div className="pdi-value">{property.data.country}</div>
                  </div>
                )}
                {property.data.governorate && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.governorate" />
                      :
                    </div>
                    <div className="pdi-value">{property.data.governorate}</div>
                  </div>
                )}
                {property.data.city && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.city" />:
                    </div>
                    <div className="pdi-value">{property.data.city}</div>
                  </div>
                )}
                {property.data.total_area && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.total_area" />
                      :
                    </div>
                    <div className="pdi-value">
                      {convertAreaSize(
                        Number(property.data.total_area),
                        property.data.country
                      )}
                      {/* {property.data.total_area} M */}
                    </div>
                  </div>
                )}
                {property.data.building_area && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.building_area" />
                      :
                    </div>
                    <div className="pdi-value">
                      {convertAreaSize(
                        Number(property.data.building_area),
                        property.data.country
                      )}
                    </div>
                  </div>
                )}
                {Number(property.data.garden_area) !== 0 && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.garden_area" />
                      :
                    </div>
                    <div className="pdi-value">
                      {convertAreaSize(
                        Number(property.data.garden_area),
                        property.data.country
                      )}
                    </div>
                  </div>
                )}
                {Number(property.data.no_bed_room) != 0 && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.bed_room" />:
                    </div>
                    <div className="pdi-value">{property.data.no_bed_room}</div>
                  </div>
                )}
                {Number(property.data.no_bath_room) !== 0 && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.bath_room" />:
                    </div>
                    <div className="pdi-value">
                      {property.data.no_bath_room}
                    </div>
                  </div>
                )}
                {Number(property.data.no_kitchen) !== 0 && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.kitchen" />:
                    </div>
                    <div className="pdi-value">{property.data.no_kitchen}</div>
                  </div>
                )}
                {Number(property.data.no_reception) !== 0 && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.reception" />:
                    </div>
                    <div className="pdi-value">
                      {property.data.no_reception}
                    </div>
                  </div>
                )}
                {Number(property.data.no_dressing) !== 0 && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.dressing" />:
                    </div>
                    <div className="pdi-value">{property.data.no_dressing}</div>
                  </div>
                )}
                {Number(property.data.no_roof) !== 0 && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.roof" />:
                    </div>
                    <div className="pdi-value">{property.data.no_roof}</div>
                  </div>
                )}
                {property.data.compound_name && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.compound_name" />
                      :
                    </div>
                    <div className="pdi-value">
                      {property.data.compound_name}
                    </div>
                  </div>
                )}
                {property.data.receiving_date && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.receiving_date" />
                      :
                    </div>
                    <div className="pdi-value">
                      {property.data.receiving_date}
                    </div>
                  </div>
                )}
              </div>
              <div className="amenities-area property-details-inner">
                {Number(property.data.private_garden) === 1 && (
                  <div className="pdi-box">
                    <div className="pdi-icon">
                      <BsCheck />
                    </div>
                    <div className="pdi-value">
                      <FormattedMessage id="page.property.details.private_garden" />
                    </div>
                  </div>
                )}
                {Number(property.data.private_parking) === 1 && (
                  <div className="pdi-box">
                    <div className="pdi-icon">
                      <BsCheck />
                    </div>
                    <div className="pdi-value">
                      <FormattedMessage id="page.property.details.private_parking" />
                    </div>
                  </div>
                )}
                {Number(property.data.private_pool) === 1 && (
                  <div className="pdi-box">
                    <div className="pdi-icon">
                      <BsCheck />
                    </div>
                    <div className="pdi-value">
                      <FormattedMessage id="page.property.details.private_pool" />
                    </div>
                  </div>
                )}
                {Number(property.data.security) === 1 && (
                  <div className="pdi-box">
                    <div className="pdi-icon">
                      <BsCheck />
                    </div>
                    <div className="pdi-value">
                      {" "}
                      <FormattedMessage id="page.property.details.security" />
                    </div>
                  </div>
                )}
                {Number(property.data.public_pool) === 1 && (
                  <div className="pdi-box">
                    <div className="pdi-icon">
                      <BsCheck />
                    </div>
                    <div className="pdi-value">
                      {" "}
                      <FormattedMessage id="page.property.details.public_pool" />
                    </div>
                  </div>
                )}
                {Number(property.data.public_garden) === 1 && (
                  <div className="pdi-box">
                    <div className="pdi-icon">
                      <BsCheck />
                    </div>
                    <div className="pdi-value">
                      {" "}
                      <FormattedMessage id="page.property.details.public_garden" />
                    </div>
                  </div>
                )}
                {Number(property.data.lift) === 1 && (
                  <div className="pdi-box">
                    <div className="pdi-icon">
                      <BsCheck />
                    </div>
                    <div className="pdi-value">
                      {" "}
                      <FormattedMessage id="page.property.details.Elevator" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Payment / Receiving */}
            <div
              className={`details-inner-box ${
                paymentCollapsed ? "collapsed" : ""
              }`}
            >
              <div
                className="section-inner-title"
                onClick={() => setPaymentCollapsed(!paymentCollapsed)}
              >
                <MdOutlineArrowDropUp />
                <h4>
                  <FormattedMessage id="page.property.details.payment-Receiving.title" />
                </h4>
              </div>
              {/* End section-inner-title */}
              <div className="property-details-inner">
                {property.data.total_price && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.Total_price_in_cash" />
                      :
                    </div>
                    <div className="pdi-value">
                      {/* <span>{property.data.total_price}</span> */}
                      {formatterEGP && (
                        <span>
                          {formatterEGP?.format(property.data.total_price)}
                        </span>
                      )}
                      {formatterAED && (
                        <span>
                          {formatterAED?.format(property.data.total_price)}
                        </span>
                      )}
                      {formatterUSD && (
                        <span>
                          {formatterUSD?.format(property.data.total_price)}
                        </span>
                      )}
                      {formatterEURO && (
                        <span>
                          {formatterEURO?.format(property.data.total_price)}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                {property.data.total_price_installment && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.Total_price_in_installments" />
                      :
                    </div>
                    <div className="pdi-value">
                      {formatterEGP && (
                        <span>
                          {formatterEGP?.format(
                            property.data.total_price_installment
                          )}
                        </span>
                      )}
                      {formatterAED && (
                        <span>
                          {formatterAED?.format(
                            property.data.total_price_installment
                          )}
                        </span>
                      )}
                      {formatterUSD && (
                        <span>
                          {formatterUSD?.format(
                            property.data.total_price_installment
                          )}
                        </span>
                      )}
                      {formatterEURO && (
                        <span>
                          {formatterEURO?.format(
                            property.data.total_price_installment
                          )}
                        </span>
                      )}
                      {/* <span>{property.data.total_price_installment}</span> */}
                    </div>
                  </div>
                )}
                {property.data?.advance_payment?.length > 1 && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.advance_payment" />
                      :
                    </div>
                    <div className="pdi-value">
                      {property.data.advance_payment}
                    </div>
                  </div>
                )}
                {property.data.installment && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.installment_price" />
                      :
                    </div>
                    <div className="pdi-value">
                      {formatterEGP && (
                        <span>
                          {formatterEGP?.format(property.data.installment)}
                        </span>
                      )}
                      {formatterAED && (
                        <span>
                          {formatterAED?.format(property.data.installment)}
                        </span>
                      )}
                      {formatterUSD && (
                        <span>
                          {formatterUSD?.format(property.data.installment)}
                        </span>
                      )}
                      {formatterEURO && (
                        <span>
                          {formatterEURO?.format(property.data.installment)}
                        </span>
                      )}
                      {/* <span>{property.data.installment}</span> */}
                    </div>
                  </div>
                )}
                {property.data.maintenance_fees && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.maintenance_fees" />
                      :
                    </div>
                    <div className="pdi-value">
                      {formatterEGP && (
                        <span>
                          {formatterEGP?.format(property.data.maintenance_fees)}
                        </span>
                      )}
                      {formatterAED && (
                        <span>
                          {formatterAED?.format(property.data.maintenance_fees)}
                        </span>
                      )}
                      {formatterUSD && (
                        <span>
                          {formatterUSD?.format(property.data.maintenance_fees)}
                        </span>
                      )}
                      {formatterEURO && (
                        <span>
                          {formatterEURO?.format(property.data.maintenance_fees)}
                        </span>
                      )}
                      {/* <span>{property.data.maintenance_fees}</span> */}
                    </div>
                  </div>
                )}
                {property.data.currency && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.Currency" />:
                    </div>
                    <div className="pdi-value">{property.data.currency}</div>
                  </div>
                )}
                {property.data.installment_time && (
                  <div className="pdi-box">
                    <div className="pdi-name">
                      <FormattedMessage id="page.property.details.installment_time" />
                      :
                    </div>
                    <div className="pdi-value">
                      {property.data.installment_time} +{" "}
                      {locale === "ar" ? "سنوات" : "years"}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Nearby Places */}
            {!property.data.school &&
            !property.data.mall &&
            !property.data.hospital &&
            !property.data.pharmacy &&
            !property.data.super_market &&
            !property.data.nursery_school ? null : (
              <div
                className={`details-inner-box ${
                  amenitiesCollapsed ? "collapsed" : ""
                }`}
              >
                <div
                  className="section-inner-title"
                  onClick={() => setAmenitiesCollapsed(!amenitiesCollapsed)}
                >
                  <MdOutlineArrowDropUp />
                  <h4>
                    <FormattedMessage id="page.property.details.Nearby_Places" />
                  </h4>
                </div>
                <div className="property-details-inner">
                  {property.data.school && (
                    <div className="pdi-box">
                      <div className="pdi-name">
                        <FormattedMessage id="page.property.details.school" />:
                      </div>
                      <div className="pdi-value">{property.data.school}</div>
                    </div>
                  )}
                  {property.data.mall && (
                    <div className="pdi-box">
                      <div className="pdi-name">
                        <FormattedMessage id="page.property.details.mall" />:
                      </div>
                      <div className="pdi-value">{property.data.mall}</div>
                    </div>
                  )}
                  {property.data.hospital && (
                    <div className="pdi-box">
                      <div className="pdi-name">
                        <FormattedMessage id="page.property.details.hospital" />
                        :
                      </div>
                      <div className="pdi-value">{property.data.hospital}</div>
                    </div>
                  )}
                  {property.data.pharmacy && (
                    <div className="pdi-box">
                      <div className="pdi-name">
                        <FormattedMessage id="page.property.details.pharmacy" />
                        :
                      </div>
                      <div className="pdi-value">{property.data.pharmacy}</div>
                    </div>
                  )}
                  {property.data.super_market && (
                    <div className="pdi-box">
                      <div className="pdi-name">
                        <FormattedMessage id="page.property.details.super_market" />{" "}
                        :
                      </div>
                      <div className="pdi-value">
                        {property.data.super_market}
                      </div>
                    </div>
                  )}
                  {property.data.nursery_school && (
                    <div className="pdi-box">
                      <div className="pdi-name">
                        <FormattedMessage id="page.property.details.nursery_school" />
                        :
                      </div>
                      <div className="pdi-value">
                        {property.data.nursery_school}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Finishing condition */}
            {!property.data.walls &&
            !property.data.floors &&
            !property.data.ceilings &&
            !property.data.bath_rooms &&
            !property.data.kitchen &&
            !property.data.light_system &&
            !property.data.air_conditioners &&
            !property.data.internet ? null : (
              <div
                className={`details-inner-box ${
                  finishingCollapsed ? "collapsed" : ""
                }`}
              >
                <div
                  className="section-inner-title"
                  onClick={() => setFinishingCollapsed(!finishingCollapsed)}
                >
                  <MdOutlineArrowDropUp />
                  <h4>
                    <FormattedMessage id="page.property.details.Finishing_condition" />
                  </h4>
                </div>
                <div className="property-details-inner">
                  {property.data.walls && (
                    <div className="pdi-box">
                      <div className="pdi-name">
                        <FormattedMessage id="page.property.details.walls" />:
                      </div>
                      <div className="pdi-value">{property.data.walls}</div>
                    </div>
                  )}
                  {property.data.floors && (
                    <div className="pdi-box">
                      <div className="pdi-name">
                        <FormattedMessage id="page.property.details.floors" />:
                      </div>
                      <div className="pdi-value">{property.data.floors}</div>
                    </div>
                  )}
                  {property.data.ceilings && (
                    <div className="pdi-box">
                      <div className="pdi-name">
                        <FormattedMessage id="page.property.details.ceilings" />
                        :
                      </div>
                      <div className="pdi-value">{property.data.ceilings}</div>
                    </div>
                  )}
                  {property.data.bath_rooms && (
                    <div className="pdi-box">
                      <div className="pdi-name">
                        <FormattedMessage id="page.property.details.bath_rooms" />
                        :
                      </div>
                      <div className="pdi-value">
                        {property.data.bath_rooms}
                      </div>
                    </div>
                  )}
                  {property.data.kitchen && (
                    <div className="pdi-box">
                      <div className="pdi-name">
                        <FormattedMessage id="page.property.details.kitchen" />:
                      </div>
                      <div className="pdi-value">{property.data.kitchen}</div>
                    </div>
                  )}
                  {property.data.light_system && (
                    <div className="pdi-box">
                      <div className="pdi-name">
                        <FormattedMessage id="page.property.details.light_system" />
                        :
                      </div>
                      <div className="pdi-value">
                        {property.data.light_system}
                      </div>
                    </div>
                  )}
                  {property.data.air_conditioners && (
                    <div className="pdi-box">
                      <div className="pdi-name">
                        <FormattedMessage id="page.property.details.air_conditioners" />
                        :
                      </div>
                      <div className="pdi-value">
                        {property.data.air_conditioners}
                      </div>
                    </div>
                  )}
                  {property.data.internet && (
                    <div className="pdi-box">
                      <div className="pdi-name">
                        <FormattedMessage id="page.property.details.internet" />
                        :
                      </div>
                      <div className="pdi-value">{property.data.internet}</div>
                    </div>
                  )}
                </div>
              </div>
            )}
            
              {property.data.general_details && (
              <div
                className={`details-inner-box ${
                  moreDetailsCollapsed ? "collapsed" : ""
                }`}
              >
                <div
                  className="section-inner-title"
                  onClick={() => setMoreDetailsCollapsed(!moreDetailsCollapsed)}
                >
                  <MdOutlineArrowDropUp />
                  <h4>
                    <FormattedMessage id="page.property.details.general_details" />
                  </h4>
                </div>
                <div className="property-details-inner">
                    <div className="pdi-box">
                      <div className="pdi-value">{property.data.general_details}</div>
                    </div>
                </div>
              </div>
            )}
          </div>
          {/* End col-12 */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default PropertyDetails;
