import React from "react";
import "ol/ol.css";
import "../styles/Map.css";
import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import NavBarTop from "./sub-components/Navbar";

const TrackingMap = () => {
  const map = new Map({
    target: "map",
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });
  return (
    <>
      <NavBarTop />

      <div id="map"></div>
    </>
  );
};

export default TrackingMap;
