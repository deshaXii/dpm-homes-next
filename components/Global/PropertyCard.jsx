import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { RiHotelBedLine } from "react-icons/ri";
import { BsHeartFill, BsHeart, BsTelephone } from "react-icons/bs";
import { MdOutlineBathtub } from "react-icons/md";
import { AiOutlineBorderOuter, AiOutlineShareAlt } from "react-icons/ai";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { addPropertyToWishlist } from "../../store/slices/wishlist";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getPropertiesWithTpye } from "../../store/slices/properties";
import jsCookies from "js-cookies";

const PropertyCard = ({ image, featureCount, className, property }) => {
  const router = useRouter();
  const { locale } = router;

  var formatter = new Intl.NumberFormat(`${locale}-eg`, {
    style: "currency",
    currency: "EGP",
  });

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
        <Link href={`/property/${property.id}`}>
          <a>
            <Image width={400} height={300} src={image} />
          </a>
        </Link>
        <div className="property-tags">
          <span className="t-rent">For {property.sell_rent_type}</span>
        </div>
        <div className="property-lc">
          <span>{property.licence}</span>
        </div>
        <div className="property-added-by">
          <Link href="#">
            <a>
              {property.user_info.image ? (
                <Image
                  src="/img/logo.png"
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
          <span>
            {formatter.format(property.total_price)}
            <div>
              {/* <FormattedMessage id="section.property_card.currency.egp" /> */}
            </div>
          </span>
        </div>
        <div className="property-card-title">
          <Link href="#">
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
            {property.licence === "housing" && (
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
            <button type="button" className="btn share-btn">
              <AiOutlineShareAlt />
            </button>
            <button
              type="button"
              className={`btn wish-btn ${property.wishlist.toLowerCase() === "yes" ? 'active' : ''}`}
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
