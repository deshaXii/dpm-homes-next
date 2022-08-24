import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Custom404() {
  const router = useRouter();
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
              <Link href="/">
                <a className="unq btn">go home</a>
              </Link>
              <button
                type="button"
                onClick={(e) => router.back()}
                className="btn"
              >
                back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
