import { useEffect } from "react";
import Default from "../layouts/default";
import Head from "next/head";
import HomeIntro from "../components/Home/Intro";
import Services from "../components/Home/Services";
import { FormattedMessage } from "react-intl";
import { wrapper } from "../store";
import {
  getHomepageRentUnits,
  getHomepageSellUnits,
  getPropertiesWithTpye,
  selectProperties,
} from "../store/slices/properties";
import { getAllProjects } from "../store/slices/projects";
import dynamic from "next/dynamic";
import { parseCookies } from "../common/parseCookies";
import { getAllCountries } from "../store/slices/countries";
const Properties = dynamic(() => import("../components/Global/Properties"));
const Projects = dynamic(() => import("../components/Home/Projects"));
import { useSelector } from "react-redux";
import { getServices, selectServices } from "../store/slices/services";

const Home = ({ dir }) => {
  const { homeSell, homeRent } = useSelector(selectProperties);
  const { servicesData } = useSelector(selectServices);
  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);
  // <FormattedMessage id="page.home.title" values={{ b: (chunks) => <b>{chunks}</b> }} />
  return (
    <>
      <Head>
        <title>Luxury Aqar - Find yours dream</title>
        <link rel="alternate" href="/" hrefLang="x-default" />e
        <link rel="alternate" href="/" hrefLang="en" />
        <link rel="alternate" href="/ar" hrefLang="ar" />
      </Head>

      <Default>
        <HomeIntro />
        <Properties
          items={homeSell}
          itemsType="sell"
          sectionTitle={<FormattedMessage id="global.section.title.sell" />}
          sectionClass="for-sall"
        />
        <Services
          data={servicesData.data}
          sectionBG="/img/services-section-bg.jpg"
          withOverlay
        />
        {homeRent.data ? (
          <Properties
            items={homeRent.data}
            itemstype="rent"
            sectionTitle={<FormattedMessage id="global.section.title.rent" />}
            sectionClass="for-rent"
          />
        ) : (
          ""
        )}

        <Projects />
      </Default>
    </>
  );
};

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ res, req, locale }) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
      );
      await store.dispatch(getAllProjects(locale));
      await store.dispatch(getAllCountries(locale));
      await store.dispatch(getServices(locale));
      await store.dispatch(getHomepageSellUnits(locale));
      await store.dispatch(getHomepageRentUnits(locale));
      return {};
    }
);
