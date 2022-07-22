import React, { useEffect } from "react";
import Default from "../../layouts/default";
import PropertyMainInfo from "../../components/SingleProperty/PropertyMainInfo";
import Head from "next/head";
import PropertyViewer from "../../components/SingleProperty/PropertyViewer";
import PropertyDetails from "../../components/SingleProperty/PropertyDetails";
import Properties from "../../components/Global/Properties";
import { wrapper } from "../../store";
import { showProperty } from "../../store/slices/properties";

const SingleProperty = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);
  return (
    <>
      <Head>
        <title>Luxury Aqar - Property</title>
      </Head>
      <Default>
        <div className="property-page">
          <PropertyMainInfo />
          <PropertyViewer />
          <PropertyDetails />
          <Properties sectionTitle="For Sale" sectionClass="for-sale" />
        </div>
      </Default>
    </>
  );
};

export default SingleProperty;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ res, query }) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
      );
      const { id } = query;
      await store.dispatch(showProperty(id));
      return {
        props: {},
      };
    }
);
