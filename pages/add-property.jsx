import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Default from "../layouts/default";
import { BsShop } from "react-icons/bs";
import { BiHomeSmile } from "react-icons/bi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import Head from "next/head";
import { wrapper } from "../store/index";
import HosuingCash from "../components/Forms/hosuing-cash";
import HosuingInstallment from "../components/Forms/hosuing-installment";
import HosuingBoth from "../components/Forms/hosuing-both";
import { getAllCountries } from "../store/slices/countries";

const AddProperty = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);

  const [activeSection, setActiveSection] = useState("housing-section");
  const [activePaymentType, setActivePaymentType] = useState("for-sell");
  const [formView, setFormView] = useState("cash-form");



  return (
    <>
      <Head>
        <title>Dpm Homes - Add Your Property</title>
      </Head>
      <Default>
        <div
          className="add-property-page"
          style={{ padding: "60px 0 120px 0" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="add-property-viwer-btns property-viwer-btns arrow-to-right">
                  <button
                    onClick={() => setActiveSection("housing-section")}
                    className={`btn details-view cursor-pointer ${
                      activeSection === "housing-section" ? "active" : ""
                    }`}
                  >
                    <div className="view-btn-icon">
                      <BiHomeSmile />
                    </div>
                    <span>housing</span>
                  </button>
                  <button
                    onClick={() => setActiveSection("commercial-section")}
                    className={`btn details-view cursor-pointer ${
                      activeSection === "commercial-section" ? "active" : ""
                    }`}
                  >
                    <div className="view-btn-icon">
                      <BsShop />
                    </div>
                    <span>commercial</span>
                  </button>
                  <button
                    onClick={() => setActiveSection("administrative-section")}
                    className={`btn details-view cursor-pointer ${
                      activeSection === "administrative-section" ? "active" : ""
                    }`}
                  >
                    <div className="view-btn-icon">
                      <HiOutlineOfficeBuilding />
                    </div>
                    <span>administrative</span>
                  </button>
                </div>
              </div>
              <div className="col-md-10">
                <section className="add-property-form-section">
                  {activeSection === "housing-section" && (
                    <>
                      <div className={`payment-type-tabs`}>
                        <div
                          className={`ptt-title ${
                            activePaymentType === "for-sell" ? "active" : ""
                          }`}
                        >
                          <button
                            onClick={() => setActivePaymentType("for-sell")}
                          >
                            للبيع
                          </button>
                        </div>
                        <div
                          className={`ptt-title ${
                            activePaymentType === "for-rent" ? "active" : ""
                          }`}
                        >
                          <button
                            onClick={() => setActivePaymentType("for-rent")}
                          >
                            للإيجار
                          </button>
                        </div>
                      </div>
                      {activePaymentType === "for-sell" && (
                        <div className={`payment-type-tabs second-tabs`}>
                          <div
                            className={`ptt-title ${
                              formView === "cash-form" ? "active" : ""
                            }`}
                          >
                            <button onClick={() => setFormView("cash-form")}>
                              كاش
                            </button>
                          </div>
                          <div
                            className={`ptt-title ${
                              formView === "installments-form" ? "active" : ""
                            }`}
                          >
                            <button
                              onClick={() => setFormView("installments-form")}
                            >
                              تقسيط
                            </button>
                          </div>
                          <div
                            className={`ptt-title ${
                              formView === "both-form" ? "active" : ""
                            }`}
                          >
                            <button onClick={() => setFormView("both-form")}>
                              كاش و تقسيط
                            </button>
                          </div>
                        </div>
                      )}

                      {activePaymentType === "for-sell" && (
                        <div className="payment-type-tabs-content">
                          {formView === "cash-form" && <HosuingCash />}
                          {formView === "installments-form" && (
                            <HosuingInstallment />
                          )}
                          {formView === "both-form" && <HosuingBoth />}
                        </div>
                      )}
                      {activePaymentType === "for-rent" && (
                        <div className="payment-type-tabs-content"></div>
                      )}
                    </>
                  )}
                </section>
              </div>
            </div>
          </div>
        </div>
      </Default>
    </>
  );
};

export default AddProperty;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, query }) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
      );
      let user = store.getState().auth.user;
      if (!user) {
        return {
          redirect: {
            destination: "/login",
          },
          props: {},
        };
      }
      const { locale } = query;
      await store.dispatch(getAllCountries(locale));
      return {
        props: {},
      };
    }
);
