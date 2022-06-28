import React, { useState } from "react";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectProperties } from "../../store/slices/properties";
import { useRouter } from "next/router";

const PropertyDetails = () => {
  const [detailsCollapsed, setDetailsCollapsed] = useState(false);
  const [amenitiesCollapsed, setAmenitiesCollapsed] = useState(true);
  const [paymentCollapsed, setPaymentCollapsed] = useState(true);
  const [finishingCollapsed, setFinishingCollapsed] = useState(true);
  const { property } = useSelector(selectProperties);
  const router = useRouter();
  const { locale } = router;
  var formatter = new Intl.NumberFormat(`${locale}-eg`, {
    style: "currency",
    currency: "EGP",
  });
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
                <h4>Property Details</h4>
              </div>
              <div className="property-details-inner">
                {property.data.licence && (
                  <div className="pdi-box">
                    <div className="pdi-name">licence:</div>
                    <div className="pdi-value">{property.data.licence}</div>
                  </div>
                )}

                {property.data.property_type && (
                  <div className="pdi-box">
                    <div className="pdi-name">property type:</div>
                    <div className="pdi-value">
                      {property.data.property_type}
                    </div>
                  </div>
                )}

                {property.data.furniture_type && (
                  <div className="pdi-box">
                    <div className="pdi-name">furniture type:</div>
                    <div className="pdi-value">
                      {property.data.furniture_type}
                    </div>
                  </div>
                )}

                {property.data.unit_status && (
                  <div className="pdi-box">
                    <div className="pdi-name">unit status:</div>
                    <div className="pdi-value">{property.data.unit_status}</div>
                  </div>
                )}

                {property.data.payment_type && (
                  <div className="pdi-box">
                    <div className="pdi-name">payment type:</div>
                    <div className="pdi-value">
                      {property.data.payment_type}
                    </div>
                  </div>
                )}
                {(property.data.payment_type && property.data.payment_type) !==
                  "cash" && (
                  <div className="pdi-box">
                    <div className="pdi-name">rent type:</div>
                    <div className="pdi-value">{property.data.rent_type}</div>
                  </div>
                )}
                {property.data.country && (
                  <div className="pdi-box">
                    <div className="pdi-name">country:</div>
                    <div className="pdi-value">{property.data.country}</div>
                  </div>
                )}
                {property.data.governorate && (
                  <div className="pdi-box">
                    <div className="pdi-name">governorate:</div>
                    <div className="pdi-value">{property.data.governorate}</div>
                  </div>
                )}
                {property.data.city && (
                  <div className="pdi-box">
                    <div className="pdi-name">city:</div>
                    <div className="pdi-value">{property.data.city}</div>
                  </div>
                )}
                {property.data.total_area && (
                  <div className="pdi-box">
                    <div className="pdi-name">total area:</div>
                    <div className="pdi-value">
                      {property.data.total_area} M
                    </div>
                  </div>
                )}
                {property.data.building_area && (
                  <div className="pdi-box">
                    <div className="pdi-name">building area:</div>
                    <div className="pdi-value">
                      {property.data.building_area} M
                    </div>
                  </div>
                )}
                {property.data.garden_area && (
                  <div className="pdi-box">
                    <div className="pdi-name">garden area:</div>
                    <div className="pdi-value">
                      {property.data.garden_area} M
                    </div>
                  </div>
                )}
                {property.data.no_bed_room && (
                  <div className="pdi-box">
                    <div className="pdi-name">bed room:</div>
                    <div className="pdi-value">{property.data.no_bed_room}</div>
                  </div>
                )}
                {property.data.no_bath_room && (
                  <div className="pdi-box">
                    <div className="pdi-name">bath room:</div>
                    <div className="pdi-value">
                      {property.data.no_bath_room}
                    </div>
                  </div>
                )}
                {property.data.no_kitchen && (
                  <div className="pdi-box">
                    <div className="pdi-name">kitchen:</div>
                    <div className="pdi-value">{property.data.no_kitchen}</div>
                  </div>
                )}
                {property.data.no_reception && (
                  <div className="pdi-box">
                    <div className="pdi-name">reception:</div>
                    <div className="pdi-value">
                      {property.data.no_reception}
                    </div>
                  </div>
                )}
                {property.data.no_dressing && (
                  <div className="pdi-box">
                    <div className="pdi-name">dressing:</div>
                    <div className="pdi-value">{property.data.no_dressing}</div>
                  </div>
                )}
                {property.data.no_roof && (
                  <div className="pdi-box">
                    <div className="pdi-name">roof:</div>
                    <div className="pdi-value">{property.data.no_roof}</div>
                  </div>
                )}
                {property.data.compound_name && (
                  <div className="pdi-box">
                    <div className="pdi-name">compound name:</div>
                    <div className="pdi-value">
                      {property.data.compound_name}
                    </div>
                  </div>
                )}
                {property.data.receiving_date && (
                  <div className="pdi-box">
                    <div className="pdi-name">receiving date:</div>
                    <div className="pdi-value">
                      {property.data.receiving_date}
                    </div>
                  </div>
                )}
              </div>
              <div className="amenities-area property-details-inner">
                {property.data.private_garden && (
                  <div className="pdi-box">
                    <div className="pdi-icon">
                      <BsCheck />
                    </div>
                    <div className="pdi-value">private garden</div>
                  </div>
                )}
                {property.data.private_parking && (
                  <div className="pdi-box">
                    <div className="pdi-icon">
                      <BsCheck />
                    </div>
                    <div className="pdi-value">private parking</div>
                  </div>
                )}
                {property.data.private_pool && (
                  <div className="pdi-box">
                    <div className="pdi-icon">
                      <BsCheck />
                    </div>
                    <div className="pdi-value">private pool</div>
                  </div>
                )}
                {property.data.security && (
                  <div className="pdi-box">
                    <div className="pdi-icon">
                      <BsCheck />
                    </div>
                    <div className="pdi-value">security</div>
                  </div>
                )}
                {property.data.public_pool && (
                  <div className="pdi-box">
                    <div className="pdi-icon">
                      <BsCheck />
                    </div>
                    <div className="pdi-value">public pool</div>
                  </div>
                )}
                {property.data.public_garden && (
                  <div className="pdi-box">
                    <div className="pdi-icon">
                      <BsCheck />
                    </div>
                    <div className="pdi-value">public garden</div>
                  </div>
                )}
                {property.data.lift && (
                  <div className="pdi-box">
                    <div className="pdi-icon">
                      <BsCheck />
                    </div>
                    <div className="pdi-value">Elevator</div>
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
                <h4>payment / Receiving</h4>
              </div>
              {/* End section-inner-title */}
              <div className="property-details-inner">
                {property.data.total_price && (
                  <div className="pdi-box">
                    <div className="pdi-name">Total price in cash:</div>
                    <div className="pdi-value">
                      {formatter.format(property.data.total_price)}
                    </div>
                  </div>
                )}
                {property.data.total_price_installment && (
                  <div className="pdi-box">
                    <div className="pdi-name">Total price in installments:</div>
                    <div className="pdi-value">
                      {formatter.format(property.data.total_price_installment)}
                    </div>
                  </div>
                )}
                {property.data.advance_payment && (
                  <div className="pdi-box">
                    <div className="pdi-name">advance payment:</div>
                    <div className="pdi-value">
                      {formatter.format(property.data.advance_payment)}
                    </div>
                  </div>
                )}
                {property.data.installment && (
                  <div className="pdi-box">
                    <div className="pdi-name">installment price:</div>
                    <div className="pdi-value">
                      {formatter.format(property.data.installment)}
                    </div>
                  </div>
                )}
                {property.data.maintenance_fees && (
                  <div className="pdi-box">
                    <div className="pdi-name">maintenance fees:</div>
                    <div className="pdi-value">
                      {formatter.format(property.data.maintenance_fees)}
                    </div>
                  </div>
                )}
                {property.data.currency && (
                  <div className="pdi-box">
                    <div className="pdi-name">Currency:</div>
                    <div className="pdi-value">{property.data.currency}</div>
                  </div>
                )}
                {property.data.installment_time && (
                  <div className="pdi-box">
                    <div className="pdi-name">installment time:</div>
                    <div className="pdi-value">
                      {property.data.installment_time}
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
                  <h4>Nearby Places</h4>
                </div>
                <div className="property-details-inner">
                  {property.data.school && (
                    <div className="pdi-box">
                      <div className="pdi-name">school:</div>
                      <div className="pdi-value">{property.data.school}</div>
                    </div>
                  )}
                  {property.data.mall && (
                    <div className="pdi-box">
                      <div className="pdi-name">mall:</div>
                      <div className="pdi-value">{property.data.mall}</div>
                    </div>
                  )}
                  {property.data.hospital && (
                    <div className="pdi-box">
                      <div className="pdi-name">hospital:</div>
                      <div className="pdi-value">{property.data.hospital}</div>
                    </div>
                  )}
                  {property.data.pharmacy && (
                    <div className="pdi-box">
                      <div className="pdi-name">pharmacy:</div>
                      <div className="pdi-value">{property.data.pharmacy}</div>
                    </div>
                  )}
                  {property.data.super_market && (
                    <div className="pdi-box">
                      <div className="pdi-name">super market:</div>
                      <div className="pdi-value">
                        {property.data.super_market}
                      </div>
                    </div>
                  )}
                  {property.data.nursery_school && (
                    <div className="pdi-box">
                      <div className="pdi-name">nursery school:</div>
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
                  <h4>Finishing condition</h4>
                </div>
                <div className="property-details-inner">
                  {property.data.walls && (
                    <div className="pdi-box">
                      <div className="pdi-name">walls:</div>
                      <div className="pdi-value">{property.data.walls}</div>
                    </div>
                  )}
                  {property.data.floors && (
                    <div className="pdi-box">
                      <div className="pdi-name">floors:</div>
                      <div className="pdi-value">{property.data.floors}</div>
                    </div>
                  )}
                  {property.data.ceilings && (
                    <div className="pdi-box">
                      <div className="pdi-name">ceilings:</div>
                      <div className="pdi-value">{property.data.ceilings}</div>
                    </div>
                  )}
                  {property.data.bath_rooms && (
                    <div className="pdi-box">
                      <div className="pdi-name">bath rooms:</div>
                      <div className="pdi-value">
                        {property.data.bath_rooms}
                      </div>
                    </div>
                  )}
                  {property.data.kitchen && (
                    <div className="pdi-box">
                      <div className="pdi-name">kitchen:</div>
                      <div className="pdi-value">{property.data.kitchen}</div>
                    </div>
                  )}
                  {property.data.light_system && (
                    <div className="pdi-box">
                      <div className="pdi-name">light system:</div>
                      <div className="pdi-value">
                        {property.data.light_system}
                      </div>
                    </div>
                  )}
                  {property.data.air_conditioners && (
                    <div className="pdi-box">
                      <div className="pdi-name">air conditioners:</div>
                      <div className="pdi-value">
                        {property.data.air_conditioners}
                      </div>
                    </div>
                  )}
                  {property.data.internet && (
                    <div className="pdi-box">
                      <div className="pdi-name">internet:</div>
                      <div className="pdi-value">{property.data.internet}</div>
                    </div>
                  )}
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
