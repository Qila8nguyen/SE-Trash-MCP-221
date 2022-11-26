import React from "react";
import {
  GoogleMap,
  Marker,
  Polyline,
  LoadScript,
  useJsApiLoader,
} from "@react-google-maps/api";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
import { Spin } from "antd";

const options = { closeBoxURL: "", enableEventPropagation: true };

const optionsPolyline = {
  strokeColor: "red",
  strokeOpacity: 0.8,
  strokeWeight: 3,
  fillColor: "#085daa",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};

const positions = [
  {
    id: 1,
    key: 1,
    lat: 10.762622,
    lng: 106.00172,
    label: "position 1",
  },
  {
    id: 2,
    key: 2,
    lat: 10.762622,
    lng: 106,
    label: "position 2",
  },
  {
    id: 3,
    key: 3,
    lat: 10.788,
    lng: 106.2,
    label: "position 3",
  },
];

const center = { lat: 10.762622, lng: 106.660172 };

const PolylineMap = () => {
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    console.log("loading map", map);
    setMap(map);
  }, []);
  const apiKey = "AIzaSyBYJThjFIlEFgCDOKEzPRbEwdl2CfEmg4s";
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey, // ,
    // ...otherOptions
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }
  return isLoaded ? (
    <GoogleMap
      id="circle-example"
      zoom={5}
      center={center}
      onLoad={onLoad}
      mapContainerStyle={{
        height: "600px",
        // width: "800px",
      }}
    >
      {positions &&
        positions.map((position, index) => (
          <Marker position={map}>
            <InfoBox options={options}>
              <>
                <div
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "1em",
                    padding: "0.2em",
                  }}
                >
                  {position.label}
                </div>
              </>
            </InfoBox>
          </Marker>
        ))}
      <Polyline path={positions} options={optionsPolyline} />
    </GoogleMap>
  ) : (
    <Spin />
  );
};
export default React.memo(PolylineMap);
