import React from "react";
import {
  GoogleMap,
  Marker,
  Polyline,
  LoadScript,
  useJsApiLoader,
  InfoBox,
} from "@react-google-maps/api";

import { Spin } from "antd";
import RenderResult from "next/dist/server/render-result";

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
    lat: 10.562622,
    lng: 106.51092,
    label: "position 1",
  },
  {
    id: 2,
    key: 2,
    lat: 10.562622,
    lng: 106.564172,
    label: "position 2",
  },
  {
    id: 3,
    key: 3,
    lat: 10.662,
    lng: 106.561,
    label: "position 3",
  },
  {
    id: 4,
    key: 4,
    lat: 10.682,
    lng: 106.581,
    label: "position 4",
  },
  {
    id: 5,
    key: 5,
    lat: 10.702,
    lng: 106.781,
    label: "position 5",
  },
  {
    id: 6,
    key: 6,
    lat: 10.742,
    lng: 106.61,
    label: "position 6",
  },
  {
    id: 7,
    key: 7,
    lat: 10.782,
    lng: 106.651,
    label: "position 7",
  },
  {
    id: 8,
    key: 8,
    lat: 11,
    lng: 106.8,
    label: "position 8",
  },
  {
    id: 9,
    key: 9,
    lat: 10.743,
    lng: 107,
    label: "position 9",
  },
  {
    id: 10,
    key: 10,
    lat: 10.8,
    lng: 107.2,
    label: "position 10",
  },
  {
    id: 11,
    key: 11,
    lat: 11,
    lng: 105,
    label: "position 11",
  },
  {
    id: 12,
    key: 12,
    lat: 11,
    lng: 106.675,
    label: "position 12",
  },
  {
    id: 13,
    key: 13,
    lat: 11.5,
    lng: 106.9,
    label: "position 13",
  },
  {
    id: 14,
    key: 14,
    lat: 10.655,
    lng: 107.1,
    label: "position 14",
  },
  {
    id: 15,
    key: 15,
    lat: 10.5,
    lng: 106.69,
    label: "position 15",
  },
  {
    id: 16,
    key: 16,
    lat: 10.8,
    lng: 106.69,
    label: "position 16",
  },
];

const center = { lat: 10.562622, lng: 106.660172 };

const PolylineMap = () => {
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    console.log("loading map", map);
    setMap(map);
  }, []);
  // const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiKey = "AIzaSyBYJThjFIlEFgCDOKEzPRbEwdl2CfEmg4s";
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  // Vertex count

  let V = positions.length;

  // Calculate distance from latitude and longitude to Km

  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  // Dijkstra’s Shortest Path Algorithm

  function minDistance(dist,sptSet) {
     
    let min = Number.MAX_VALUE;
    let min_index = -1;
     
    for(let v = 0; v < V; v++) {
      if (sptSet[v] == false && dist[v].distance <= min) {
        min = dist[v].distance;
        min_index = v;
      }
    }
    return min_index;
  }
 
  function dijkstra(graph, src) {

    for(var i = 0; i < V; i++) {
      for(var j = 0; j < V; j++) {
        if(i !== src || j !== src) {
          graph[i][j] = graph[i][j] - 1;
        }
      }
    }

    let dist = [];
	  let sptSet = new Array(V);
    
    for(let i = 0; i < V; i++) {
      dist.push({"distance": Number.MAX_VALUE, "vertex": -1});
      sptSet[i] = false;
    }
    
    dist[src].distance = 0;
    dist[src].vertex = 0;
    
    for(let count = 0; count < V - 1; count++) {

      let u = minDistance(dist, sptSet);
      
      sptSet[u] = true;

      for(let v = 0; v < V; v++) {
        if (!sptSet[v] && graph[u][v] !== 0 &&
          dist[u].distance !== Number.MAX_VALUE &&
          dist[u].distance + graph[u][v] < dist[v].distance) {
          dist[v].distance = dist[u].distance + graph[u][v];
          dist[v].vertex = u;
        }
      }
    }
    
    return dist;
  }

  // Create graph

  function createGraph(arr) {
    let x = new Array(V);

    for (var i = 0; i < V; i++) {
      x[i] = new Array(V);
      let tmp = arr[i];
      for (var j = 0; j < V; j++) {
        let dist = getDistanceFromLatLonInKm(tmp.lat,tmp.lng,arr[j].lat,arr[j].lng);
        x[i][j] = dist;
      }
    }

    return x;
  }

  let graph = createGraph(positions);
  let result = dijkstra(graph, 1);

  function RenderResult(): JSX.Element {
    let list = [];
    for(var i = 0; i < V; i++) {
      let tmp = [positions[i], positions[result[i].vertex]];
      list.push(<Polyline key={i} path={tmp} options={optionsPolyline} />);
    }
    return <>{
      list
    }</>
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }
  return isLoaded ? (
    <GoogleMap
      id="circle-example"
      zoom={100}
      center={center}
      onLoad={onLoad}
      mapContainerStyle={{
        height: "500px",
      }}
    >
      {positions &&
        positions.map((position, index) => (
          <Marker position={position}>
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
      {result && <RenderResult />}
      {/* <Polyline path={positions} options={optionsPolyline} /> */}
    </GoogleMap>
  ) : (
    <Spin />
  );
};
export default React.memo(PolylineMap);
