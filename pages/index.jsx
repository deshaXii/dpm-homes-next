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
        <title>Dpm Homes - Find yours dream</title>
        <link rel="alternate" href="/" hrefLang="x-default" />e
        <link rel="alternate" href="/" hrefLang="en" />
        <link rel="alternate" href="/ar" hrefLang="ar" />
      </Head>

      <Default>
        <HomeIntro />

        <Properties
          sectionTitle={<FormattedMessage id="global.section.title.sell" />}
          sectionClass="for-sale"
        />
        <Services sectionBG="/img/services-section-bg.jpg" withOverlay />
        <Properties
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
    async ({ res, req }) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
      );
      if (req.cookies.hasOwnProperty("userToken")) {
        const cookies = parseCookies(req);
        const token = cookies.userToken;
        console.log("user in");
        await store.dispatch(
          getPropertiesWithTpye({ type: "all", userToken: token })
        );
        return {
        };
      } else {
        await store.dispatch(getPropertiesWithTpye({ type: "all" }));
        await store.dispatch(getAllProjects());
        const allProperties = store.getState().properties.allProperties;
        return {
          props: { allProperties },
        };
      }
    }
);
