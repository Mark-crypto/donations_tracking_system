import React, { useState, useEffect } from "react";
import "ol/ol.css";
import "../styles/Map.css";
import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";
import Feature from "ol/Feature";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import NavBarTop from "./sub-components/Navbar";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const TrackingMap = () => {
  const [vehicles, setVehicles] = useState([]);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [map, setMap] = useState(null);
  const [locationFeature, setLocationFeature] = useState(null);

  function getLocation() {
    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  }

  // Update the user's location
  function showPosition(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  // Fetch vehicle data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("http://localhost:5000/api/vehicle");
      setVehicles(response.data.data);
    };
    fetchData();
    getLocation();
  }, []);

  // Initialize the map on component mount
  useEffect(() => {
    const initialView = new View({
      center: fromLonLat([longitude, latitude]),
      zoom: 12,
      projection: "EPSG:3857",
    });

    const initialMap = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: initialView,
    });

    // Create a marker feature for the user's location
    const userLocationFeature = new Feature({
      geometry: new Point(fromLonLat([longitude, latitude])),
    });

    // Apply a style to the marker
    userLocationFeature.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 0.5], //was [0.5, 1]
          src: "https://cdn.mapmarker.io/api/v1/pin?icon=fa-map-marker&size=50&color=%23FF0000", // URL of the marker icon
        }),
      })
    );

    // Add the feature to a vector source and layer
    const vectorSource = new VectorSource({
      features: [userLocationFeature],
    });
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    // Add the vector layer to the map
    initialMap.addLayer(vectorLayer);

    // Store map and location feature references
    setMap(initialMap);
    setLocationFeature(userLocationFeature);

    return () => initialMap.setTarget(null);
  }, []);

  // Update the user's location on the map
  useEffect(() => {
    if (map && locationFeature) {
      const coordinates = fromLonLat([longitude, latitude]);
      locationFeature.getGeometry().setCoordinates(coordinates); // Update the marker's position
      map.getView().setCenter(coordinates); // Center map on new coordinates
      map.getView().setZoom(12); // Adjust zoom level for better visibility
    }
  }, [longitude, latitude, map, locationFeature]);

  return (
    <>
      <NavBarTop />
      <ToastContainer />
      <div id="map" style={{ width: "100%", height: "500px" }}></div>

      <Table striped hover variant="dark" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Number Plate</th>
            <th>Model </th>
            <th>Brand </th>
            <th>Latitude </th>
            <th>Longitude </th>
            <th>Capacity (Litres) </th>
          </tr>
        </thead>
        <tbody>
          {/* Vehicle table */}
          {vehicles.length !== 0 ? (
            vehicles.map((vehicle, index) => {
              const {
                vehicle_ID: id,
                number_plate,
                model,
                brand,
                latitude,
                longitude,
                capacity_in_litres,
              } = vehicle;
              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{number_plate}</td>
                  <td>{model}</td>
                  <td>{brand}</td>
                  <td>{latitude}</td>
                  <td>{longitude}</td>
                  <td>{capacity_in_litres}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={8} style={{ textAlign: "center" }}>
                <h5>No Data Available</h5>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TrackingMap;
