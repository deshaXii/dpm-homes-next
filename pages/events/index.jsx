import { useRouter } from "next/router";
import { useEffect } from "react";
import SectionTitle from "../../components/Global/SectionTitle";
import Default from "../../layouts/default";

const Events = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);

  const router = useRouter();
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
            <div className="col-md-3">
              <div className="client-box">
                <div className="client-img">
                  <img src="/img/defaultUser.png" alt="client image" />
                </div>
                <div className="client-content">
                  <h3 className="client-name">Mohamed Sadka</h3>
                  <span>Markiting Company</span>
                  <div className="client-btns-list">
                    <button className="btn call">Call Now</button>
                    <button className="btn whatsapp">What'sapp</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-box">
                <div className="client-img">
                  <img src="/img/defaultUser.png" alt="client image" />
                </div>
                <div className="client-content">
                  <h3 className="client-name">Mohamed Sadka</h3>
                  <span>Markiting Company</span>
                  <div className="client-btns-list">
                    <button className="btn call">Call Now</button>
                    <button className="btn whatsapp">What'sapp</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-box">
                <div className="client-img">
                  <img src="/img/defaultUser.png" alt="client image" />
                </div>
                <div className="client-content">
                  <h3 className="client-name">Mohamed Sadka</h3>
                  <span>Markiting Company</span>
                  <div className="client-btns-list">
                    <button className="btn call">Call Now</button>
                    <button className="btn whatsapp">What'sapp</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-box">
                <div className="client-img">
                  <img src="/img/defaultUser.png" alt="client image" />
                </div>
                <div className="client-content">
                  <h3 className="client-name">Mohamed Sadka</h3>
                  <span>Markiting Company</span>
                  <div className="client-btns-list">
                    <button className="btn call">Call Now</button>
                    <button className="btn whatsapp">What'sapp</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-box">
                <div className="client-img">
                  <img src="/img/defaultUser.png" alt="client image" />
                </div>
                <div className="client-content">
                  <h3 className="client-name">Mohamed Sadka</h3>
                  <span>Markiting Company</span>
                  <div className="client-btns-list">
                    <button className="btn call">Call Now</button>
                    <button className="btn whatsapp">What'sapp</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-box">
                <div className="client-img">
                  <img src="/img/defaultUser.png" alt="client image" />
                </div>
                <div className="client-content">
                  <h3 className="client-name">Mohamed Sadka</h3>
                  <span>Markiting Company</span>
                  <div className="client-btns-list">
                    <button className="btn call">Call Now</button>
                    <button className="btn whatsapp">What'sapp</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-box">
                <div className="client-img">
                  <img src="/img/defaultUser.png" alt="client image" />
                </div>
                <div className="client-content">
                  <h3 className="client-name">Mohamed Sadka</h3>
                  <span>Markiting Company</span>
                  <div className="client-btns-list">
                    <button className="btn call">Call Now</button>
                    <button className="btn whatsapp">What'sapp</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="client-box">
                <div className="client-img">
                  <img src="/img/defaultUser.png" alt="client image" />
                </div>
                <div className="client-content">
                  <h3 className="client-name">Mohamed Sadka</h3>
                  <span>Markiting Company</span>
                  <div className="client-btns-list">
                    <button className="btn call">Call Now</button>
                    <button className="btn whatsapp">What'sapp</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
};

export default Events;
