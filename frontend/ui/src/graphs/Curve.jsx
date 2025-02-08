import React, { useEffect, useState } from "react";
import axios from "axios";

export const Curve = () => {
  const [variables, setVariables] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        "http://localhost:5000/api/report/curveGraph"
      );
      setVariables(response.data.data); //region and quantity
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("http://localhost:5000/api/report/barGraph");
      setData(response.data.data); //quantity
    };
    fetchData();
  }, []);

  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  var regions = variables.map((variable) => variable.region);
  var newRegions = regions.slice(1, 11);
  var quantity = variables.map((variable) => {
    return parseInt(variable.quantity.split(" ")[0]) * 100;
  });
  var newQuantity = quantity.slice(1, 11);

  var dataQuantity = data.map((variable) => {
    return parseInt(variable.quantity.split(" ")[0]);
  });
  var newDataQuantity = dataQuantity.slice(1, 11);

  function drawChart() {
    var newData = newRegions.map((region, index) => {
      return [region, newQuantity[index], newDataQuantity[index]];
    });
    var arrayData = [["Region", "Recipient Quantity", "Donation Quantity"]];
    arrayData = arrayData.concat(newData);
    var data = google.visualization.arrayToDataTable(arrayData);

    var options = {
      title: "Regions vs Quantity of Recipients and Donations",
      curveType: "function",
      legend: { position: "bottom" },
    };

    var chart = new google.visualization.LineChart(
      document.getElementById("curve_chart")
    );

    chart.draw(data, options);
  }
  return (
    <>
      <div id="curve_chart"></div>
    </>
  );
};
/* <p>graph number of donations vs recepients</p>; */
