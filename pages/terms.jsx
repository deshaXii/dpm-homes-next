import Head from "next/head";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Default from "../layouts/default";
import { selectSettings } from "../store/slices/settings";
import { useRouter } from "next/router";

const Terms = () => {
  const router = useRouter();
  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);
  const { settingsData } = useSelector(selectSettings);
  return (
    <>
      <Head>
        <title>
          Luxury Aqar |
          {router.locale === "en" ? " Terms & Conditions" : " الأحكام والشروط "}
        </title>
      </Head>
      <Default>
        <div className="terms-page" style={{ padding: "60px 0 120px 0" }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1> {router.locale === "en" ? " Terms & Conditions" : " الأحكام والشروط "}</h1>
                <p>{settingsData.terms}</p>
              </div>
            </div>
          </div>
        </div>
      </Default>
    </>
  );
};

export default Terms;
