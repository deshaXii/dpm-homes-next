import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { BiArea } from "react-icons/bi";
import { RiHotelBedLine } from "react-icons/ri";
import { BsHeartFill, BsHeart, BsTelephone } from "react-icons/bs";
import { MdOutlineBathtub } from "react-icons/md";
import { AiOutlineBorderOuter, AiOutlineShareAlt } from "react-icons/ai";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { RWebShare } from "react-web-share";

import { addPropertyToWishlist } from "../../store/slices/wishlist";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getPropertiesWithTpye } from "../../store/slices/properties";
import jsCookies from "js-cookies";

const PropertyCard = ({ image, featureCount, className, property }) => {
  const router = useRouter();
  const { locale } = router;

  if (property.country === "United Arab Emirates") {
    var formatterAED = new Intl.NumberFormat(`${locale}-eg`, {
      style: "currency",
      currency: "AED",
    });
  } else if (property.country === "Egypt") {
    var formatterEGP = new Intl.NumberFormat(`${locale}-eg`, {
      style: "currency",
      currency: "EGP",
    });
  }

  const dispatch = useDispatch();
  const handleAddToWishlist = (id) => {
    let token = jsCookies.getItem("userToken");
    if (token) {
      dispatch(addPropertyToWishlist(id)).then((res) => {
        if (res.payload.success) {
          dispatch(getPropertiesWithTpye({ type: "all", userToken: token }));
          toast.success(res.payload.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      });
    } else {
      router.push("/login");
    }
  };

  return (
    <div className={`property-card ${className}`}>
      <div className="property-card-image">
        <Link
          href={
            property.status === "Pending" ? "#" : `/property/${property.id}`
          }
        >
          <a>
            <Image
              width={400}
              height={300}
              src={`https://admin.dpmhomes.com/property-images/${property.images[0]}`}
            />
          </a>
        </Link>

        {property.status === "Pending" && (
          <div className="property-status">
            <span>Under Review</span>
          </div>
        )}

        <div className="property-tags">
          <span className="t-rent">
            {property.sell_rent_type === "rent" ? (
              <FormattedMessage id="global.section.title.rent" />
            ) : (
              <FormattedMessage id="global.section.title.sell" />
            )}
          </span>
        </div>
        <div className="property-lc">
          {property.licence === "housing" && (
            <span>
              <FormattedMessage id="page.add-property-tabs-housing" />{" "}
            </span>
          )}
          {property.licence === "commercial" && (
            <span>
              <FormattedMessage id="page.add-property-tabs-commercial" />{" "}
            </span>
          )}
          {property.licence === "administrative" && (
            <span>
              <FormattedMessage id="page.add-property-tabs-administrative" />{" "}
            </span>
          )}
        </div>
        <div className="property-added-by">
          <Link href={`/clients/${property.user_info.id}`}>
            <a>
              {property.user_info.image ? (
                <Image
                  src={`https://admin.dpmhomes.com/user-images/${property.user_info.image}`}
                  alt="property added by DPMHOMES"
                  width={42}
                  height={42}
                />
              ) : (
                <span className="user_f_letter">
                  {property.user_info.name[0].toUpperCase()}
                </span>
              )}
            </a>
          </Link>
        </div>
      </div>
      <div className="property-card-info">
        <div className="property-card-location">
          <HiLocationMarker />
          <Link href="#">
            <a>{property.city + ", " + property.governorate}</a>
          </Link>
        </div>
        <div className="property-card-price">
          {formatterEGP && property.total_price ? (
            <span>{formatterEGP?.format(property.total_price)}</span>
          ) : property.total_price_installment ? (
            <span>
              {formatterEGP?.format(property.total_price_installment)}
            </span>
          ) : (
            <span>{formatterEGP?.format(property.rent_price)}</span>
          )}
          {formatterAED && property.total_price ? (
            <span>{formatterAED?.format(property.total_price)}</span>
          ) : property.total_price_installment ? (
            <span>
              {formatterAED?.format(property.total_price_installment)}
            </span>
          ) : (
            <span>{formatterAED?.format(property.rent_price)}</span>
          )}
        </div>

        <div className="property-card-title">
          <Link
            href={
              property.status === "Pending" ? "#" : `/property/${property.id}`
            }
          >
            <a>
              <h5>
                {property.compound_name
                  ? property.compound_name
                  : property.property_type}
              </h5>
            </a>
          </Link>
        </div>
        <div className="propert-card-status">
          <p>
            <FormattedMessage id="section.property_card.status" /> :
            <span>{property.unit_status}</span>
          </p>
        </div>
        <div className="property-card-bottom">
          <div className="propert-card-features">
            {property.licence === "housing" ? (
              <>
                <div className="pcf-item">
                  <div className="pcf-item-top">
                    <span>{property.no_bed_room}</span>
                    <RiHotelBedLine />
                  </div>
                  <div className="pcf-item-label">
                    <p>
                      <FormattedMessage id="section.property_card.bedrooms" />
                    </p>
                  </div>
                </div>
                <div className="pcf-item">
                  <div className="pcf-item-top">
                    <span>{property.no_bath_room}</span>
                    <MdOutlineBathtub />
                  </div>
                  <div className="pcf-item-label">
                    <p>
                      <FormattedMessage id="section.property_card.bathrooms" />
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="pcf-item">
                  <div className="pcf-item-top">
                    <span>
                      {property.building_area} {locale == "en" ? "M" : "متر"}
                    </span>
                    <BiArea />
                  </div>
                  <div className="pcf-item-label">
                    <p>
                      <FormattedMessage id="page.property.details.building_area" />
                    </p>
                  </div>
                </div>
              </>
            )}

            {!featureCount && (
              <div className="pcf-item">
                <div className="pcf-item-top">
                  <span>300</span>
                  <AiOutlineBorderOuter />
                </div>
                <div className="pcf-item-label">
                  <p>Square M</p>
                </div>
              </div>
            )}
          </div>

          <div className="propert-card-buttons">
            <RWebShare
              data={{
                text: property.general_details,
                url: `https://luxuryaqar.com/property/${property.id}`,
                title: property.title,
              }}
            >
              <button type="button" className="btn share-btn">
                <AiOutlineShareAlt />
              </button>
            </RWebShare>

            <button
              type="button"
              className={`btn wish-btn ${
                property.wishlist.toLowerCase() === "yes" ? "active" : ""
              }`}
              onClick={(e) => handleAddToWishlist(property.id)}
            >
              {property.wishlist.toLowerCase() === "yes" ? (
                <BsHeartFill />
              ) : (
                <BsHeart />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
