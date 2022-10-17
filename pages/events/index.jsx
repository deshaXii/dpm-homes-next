import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/Global/SectionTitle";
import Default from "../../layouts/default";
import { wrapper } from "../../store";
import { getAllEvents, selectEvents } from "../../store/slices/events";

const Events = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);
  const { events } = useSelector(selectEvents);
  const router = useRouter();
  console.log(events);
  const { locale } = router;
  return (
    <Default>
      <div className="events-page" style={{ padding: "60px 0 120px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionTitle
                title={locale === "ar" ? "الأحداث" : "Events"}
                subTitle={locale === "ar" ? "أجدد" : "New"}
              />
            </div>
          </div>
          <div className="row">
            {events.map((event, index) => (
              <div key={index} className="col-md-3">
                <div className="client-box">
                  <div className="client-img">
                    <Link href={`/events/${event.id}`}>
                      <a>
                        <img
                          src={`https://admin.luxuryaqar.com/project-images/${event.project_image}`}
                          alt="client image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="client-content">
                    <Link href={`/events/${event.id}`}>
                      <a>
                        <h3 className="client-name">{event.project_name}</h3>
                      </a>
                    </Link>
                    <span>{event.company}</span>
                    <div className="client-btns-list">
                      <button className="btn call">Call Now</button>
                      <button className="btn whatsapp">What'sapp</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Default>
  );
};

export default Events;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ res, req, query, locale }) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
      );
      await store.dispatch(getAllEvents());
      return {
        props: {},
      };
    }
);
