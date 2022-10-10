import Image from "next/image";
import React, { useEffect, useState } from "react";
import Default from "../../layouts/default";
import { FiPhoneCall, FiShare2, FiMessageCircle } from "react-icons/fi";
import SectionTitle from "../../components/Global/SectionTitle";
import { wrapper } from "../../store";
import { getClientInfo, selectClient } from "../../store/slices/client";
import { useSelector } from "react-redux";
import Head from "next/head";
import { FormattedMessage } from "react-intl";
import PaginatedItems from "../../components/Global/PaginatedItems";

const ClientProfile = () => {
  const { clientData } = useSelector(selectClient);

  const [showMore, setShowMore] = useState();
  useEffect(() => {
    document.body.style.backgroundColor = "#011f2a";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);
  return (
    <>
      <Head>
        <title>Property in Egypt, Dubai Real Estate - Luxury Aqar</title>
      </Head>
      <Default>
        <div className="client-page" style={{ padding: "60px 0 120px 0" }}>
          <div className="container">
            <div className="client-header">
              <div className="sbf">
                <div className="client-header-left">
                  <div className="client-header-image">
                    <Image
                      src={`https://admin.dpmhomes.com/user-images/${clientData.user.image}`}
                      alt="client image"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="client-header-middle">
                  <div className="clinet-main-info">
                    <span>{clientData.user.account_status}</span>
                    <h3>{clientData.user.name}</h3>
                    <div className="client-badge">
                      <p>
                        <span>16 </span> years Exp
                      </p>
                      <p>
                        <span>2</span> Transactions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="client-header-right">
                  <div className="chr-top">
                    <div className="chr-item">
                      <span>License</span>
                      <p>01757886</p>
                    </div>
                    <div className="chr-item">
                      <span>language</span>
                      <p>Arabic</p>
                    </div>
                  </div>
                  <div className="chr-bottom">
                    <div className="chr-item">
                      <span>Account Type</span>
                      <p>{clientData.user.type}</p>
                    </div>
                    <div className="chr-item">
                      <span>Country</span>
                      <p>Egypt</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clinet-contact-btns">
                <div className="client-contact-btn">
                  <button className="btn">
                    <FiPhoneCall /> <span>Call</span>
                  </button>
                </div>
                <div className="client-contact-btn">
                  <button className="btn">
                    <FiMessageCircle /> <span>Message</span>
                  </button>
                </div>
                <div className="client-contact-btn">
                  <button className="btn">
                    <FiShare2 /> <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
            {clientData.user?.about && (
              <div className="clinet-more-details">
                <SectionTitle title={clientData.user.name} subTitle="About" />
                <div className="cmd-content project-content">
                  {clientData.user?.about && (
                    <div>
                      {showMore ? (
                        <p>
                          {clientData.user?.about}
                          <a
                            href="#"
                            className="show-more-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              setShowMore(!showMore);
                            }}
                          >
                            <FormattedMessage id="global.read.more" />
                          </a>
                        </p>
                      ) : (
                        <>
                          <p>
                            {clientData.user?.about?.substr(0, 198)}...
                            <a
                              className="show-more-btn"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                setShowMore(!showMore);
                              }}
                            >
                              <FormattedMessage id="global.read.more" />
                            </a>
                          </p>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="clinet-more-details xcsa">
              <div className="cmd-content">
                <section className={`properties-section`}>
                  <div className="container">
                    <SectionTitle
                      title="Properties"
                      subTitle={`${clientData.user.name}'s `}
                    />
                    <div className="row search-property-layout-content">
                      {clientData.properties.length ? (
                        <PaginatedItems
                          itemsPerPage={8}
                          layout={"grid4"}
                          items={clientData.properties}
                        />
                      ) : (
                        <div className="no-properties">
                          <FormattedMessage id="global.no-property-found" />
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Default>
    </>
  );
};

export default ClientProfile;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ res, query }) => {
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
      );
      let id = query.id;
      await store.dispatch(getClientInfo(id));
      return {
        props: {},
      };
    }
);
