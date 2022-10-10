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
          width="100%"
          height="400px"
          src="https://api.mapbox.com/styles/v1/luxuryaqar/cl91zcm91000915pieqpl0pkq.html?title=false&access_token=pk.eyJ1IjoibHV4dXJ5YXFhciIsImEiOiJjbDh3ZXRoNTMwZzRwM25xbnhkNGg4NDE3In0.2DCr351qKjKJmVT4PUkR6Q&zoomwheel=false#13.4/30.00115/30.91893"
          title="Streets"
        ></iframe>
      </div>
    </Default>
  );
};

export default MapBox;
