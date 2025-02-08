import React, { useEffect, useState } from "react";
import axios from "axios";

export const Line = () => {
  const [variables, setVariables] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("http://localhost:5000/api/recepients");
      setVariables(response.data.data);
    };
    fetchData();
  }, []);

  google.charts.load("current", { packages: ["corechart", "line"] });
  google.charts.setOnLoadCallback(drawBasic);

  var familyType = variables.map((variable) => variable.familyType);
  var newFamilyType = familyType.slice(1, 6);
  var quantity = variables.map((variable) => {
    return parseInt(variable.quantity.split(" ")[0]);
  });
  var newQuantity = quantity.slice(1, 6);

  function drawBasic() {
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Family Type");
    data.addColumn("number", "Quantity");
    var dataArray = newFamilyType.map((family, index) => {
      return [family, newQuantity[index]];
    });

    data.addRows(dataArray);

    var options = {
      hAxis: {
        title: "Family Type",
      },
      vAxis: {
        title: "Quantity",
      },
    };

    var chart = new google.visualization.LineChart(
      document.getElementById("chart_div_3")
    );

    chart.draw(data, options);
  }
  return (
    <>
      <script
        type="text/javascript"
        src="https://www.gstatic.com/charts/loader.js"
      ></script>
      <div id="chart_div_3"></div>
    </>
  );
};

/* <p>graph number of familyType vs quantity</p> */
