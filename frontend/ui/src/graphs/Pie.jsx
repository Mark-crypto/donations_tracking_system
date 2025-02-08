import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const Pie = () => {
  const [variables, setVariables] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("http://localhost:5000/api/report/pieChart");
      setVariables(response.data.data);
    };
    fetchData();
  });
  // Load the Visualization API and the corechart package.
  google.charts.load("current", { packages: ["corechart"] });

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  var items = variables.map((variable) => variable.item_received);
  var newItems = items.slice(0, 5);
  var quantity = variables.map((variable) => {
    return parseInt(variable.quantity.split(" ")[0]);
  });
  var newQuantity = quantity.slice(0, 5);

  function drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    // data.addColumn("string", "Topping");
    data.addColumn("string", "Items");
    data.addColumn("number", "Quantity");
    var dataArray = newItems.map((item, index) => {
      return [item, newQuantity[index]];
    });
    data.addRows(dataArray);

    // Set chart options
    var options = {
      title: "Donation Items distributed to recipients",
      width: 400,
      height: 300,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(
      document.getElementById("chart_div_1")
    );
    chart.draw(data, options);
  }
  return (
    <>
      <script
        type="text/javascript"
        src="https://www.gstatic.com/charts/loader.js"
      ></script>
      <div id="chart_div_1"></div>
    </>
  );
};
