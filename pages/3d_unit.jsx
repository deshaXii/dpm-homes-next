import React from "react";
import Default from "../layouts/default";

const MapBox = () => {
  return (
    <Default>
      <div
        className="mapbox-page"
        style={{
          height: "70vh",
        }}
      >
        <iframe
          src="https://my.matterport.com/show/?m=UU8dVPGQyrG"
          allow="xr-spatial-tracking"
        ></iframe>
      </div>
    </Default>
  );
};

export default MapBox;
