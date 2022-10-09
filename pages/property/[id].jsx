import React, { useEffect } from "react";
import Default from "../../layouts/default";
import PropertyMainInfo from "../../components/SingleProperty/PropertyMainInfo";
import Head from "next/head";
import PropertyViewer from "../../components/SingleProperty/PropertyViewer";
import PropertyDetails from "../../components/SingleProperty/PropertyDetails";
import Properties from "../../components/Global/Properties";
import { wrapper } from "../../store";
import {
  selectProperties,
  showProperty,
  showRelatedProperty,
} from "../../store/slices/properties";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import Related from "../../components/Global/Related";

const SingleProperty = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);

  const { related } = useSelector(selectProperties);

  return (
    <>
      <Head>
        <title>Property in Egypt, Dubai Real Estate - Luxury Aqar</title>
      </Head>
      <Default>
        <div className="property-page">
          <PropertyMainInfo />
          <PropertyViewer />
          <PropertyDetails />
          <Related
            properties={related}
            sectionTitle={<FormattedMessage id="section.related" />}
            sectionClass="for-sale"
          />
        </div>
      </Default>
    </>
  );
};

export default SingleProperty;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ res, query, locale }) => {
      const currency = await store.getState().settings.settingsData.currency;

      const { id } = query;
      await store.dispatch(
        showProperty({
          id,
          lang: locale,
          currency: currency,
        })
      );
      await store.dispatch(
        showRelatedProperty({
          id: id,
          lang: locale,
          currency: currency,
        })
      );
      return {
        props: {},
      };
    }
);
