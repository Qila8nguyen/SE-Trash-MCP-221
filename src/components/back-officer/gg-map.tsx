import React from "react";
import {
  // withGoogleMap,
  // withScriptjs,
  useJsApiLoader,
  GoogleMap,
  Marker,
} from "@react-google-maps/api";

declare const google: any;

const Map = (props: { latitude: number; longitude: number }) => {
  const { latitude, longitude } = props;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY",
  });

  const center = { lat: 10.56, lng: 106.53416 };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div>
      <GoogleMap
        // defaultZoom={15}
        center={center}
        onLoad={onLoad}
        zoom={10}
        onUnmount={onUnmount}
      >
        <Marker
          icon={{
            url: "https://insulationpads.co.uk/wp-content/uploads/2017/10/Home.png",
            scaledSize: new window.google.maps.Size(40, 40),
          }}
          position={center}
        />
      </GoogleMap>
    </div>
  );
};

export default React.memo(Map);
