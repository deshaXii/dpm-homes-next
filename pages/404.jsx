import { FormattedMessage } from "react-intl";

export default function Custom404() {
  return (
    <div
      className="error-page"
      style={{ backgroundImage: "url(/img/error.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="error-page-content">
              <h1>Oooops !</h1>
              <p>
                <FormattedMessage id="page.property.page-not-found" />
              </p>
              <button type="button" className="unq btn">
                go home
              </button>
              <button type="button" className="btn">
                back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
