import { useEffect } from "react";
import Default from "../layouts/default";
import Head from "next/head";
import HomeIntro from "../components/Home/Intro";
import Services from "../components/Home/Services";
import { FormattedMessage } from "react-intl";
import { wrapper } from "../store";
import { getPropertiesWithTpye } from "../store/slices/properties";
import { getAllProjects } from "../store/slices/projects";
import dynamic from "next/dynamic";
import { parseCookies } from "../common/parseCookies";
import { getAllCountries } from "../store/slices/countries";
const Properties = dynamic(() => import("../components/Global/Properties"));
const Projects = dynamic(() => import("../components/Home/Projects"));

const Home = ({ dir }) => {
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
          type={"sell"}
          sectionTitle={<FormattedMessage id="global.section.title.sell" />}
          sectionClass="for-sall"
        />
        <Services sectionBG="/img/services-section-bg.jpg" withOverlay />
        <Properties
          type={"rent"}
          sectionTitle={<FormattedMessage id="global.section.title.rent" />}
          sectionClass="for-rent"
        />
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
      if (req.cookies.hasOwnProperty("userToken")) {
        const cookies = parseCookies(req);
        const token = cookies.userToken;
        await store.dispatch(
          getPropertiesWithTpye({ type: "all", userToken: token })
        );
        return {};
      } else {
        await store.dispatch(getPropertiesWithTpye({ type: "all" }));
        return {
          props: {},
        };
      }
    }
);
