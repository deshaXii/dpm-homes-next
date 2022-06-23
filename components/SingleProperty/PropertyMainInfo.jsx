import React, { useEffect } from "react";
import { HiLocationMarker } from "react-icons/hi";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import moveWhenScroll from "../../common/moveWhenScroll";
import { useSelector } from "react-redux";
import { selectProperties } from "../../store/slices/properties";
import { useRouter } from "next/router";
import { selectUser } from "../../store/slices/auth";

const PropertyMainInfo = () => {
  const { property } = useSelector(selectProperties);
  useEffect(() => {
    let element = document.querySelectorAll(".property-main-info");
    moveWhenScroll(element);
  }, []);

  const router = useRouter();

  console.log(router);
  const { locale } = router;

  var formatter = new Intl.NumberFormat(`${locale}-eg`, {
    style: "currency",
    currency: "EGP",
  });

  return (
    <div className="property-main-info fixed-at-top">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="property-main-info-inner">
              <div className="pmii-box">
                <img
                  src={`https://admin.dpmhomes.com/user-images/${property.data.user_info.image}`}
                  alt=""
                />
                <div>
                  <Link href={`/clients/${property.data.user_info.id}`}>
                    <a>
                      <h1 className="property-main-info-name">
                        {property.data.user_info.name}
                        {property.data.user_info.compound_name
                          ? "-" + property.data.user_info.compound_name
                          : ""}
                      </h1>
                    </a>
                  </Link>
                  <div className="property-main-info-location">
                    <HiLocationMarker />
                    <Link href="#">
                      <a>{property.data.address}</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="property-main-info-buttons">
                <div className="property-main-info-price">
                  <span>{formatter.format(property.data.total_price)}</span>
                </div>
                <Link
                  href={`https://api.whatsapp.com/send/?phone=%${property.data.user_info.whatsapp}&text=اأريد الإستفسار حول هذا العقار: https://dpmhomes.com${router.asPath}`}
                >
                  <a className="btn" target="_blank">
                    <FaWhatsapp />
                  </a>
                </Link>
                <Link href={`tel:${property.data.user_info.phone}`}>
                  <a className="btn">
                    <BsTelephone />
                  </a>
                </Link>
                <button className="btn dpm-btn" type="btn">
                  <span>Appointment Booking</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyMainInfo;
