import React, { useEffect, useState } from "react";
import axios from "axios";

export const Bar = () => {
  const [variables, setVariables] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/report/barGraph"
      );
      console.log(response.data.data);

      setVariables(response.data.data);
    };
    fetchData();
  }, []);
  //var counties = variables.map((variable) => variable.county);
  //var rawDonations = variables.map((variable) => variable.donations);
  //var newDonations = rawDonations.split(" ")[0];
  //var donations = parseInt(newDonations);
  //console.log(counties);

  google.charts.load("current", { packages: ["corechart", "bar"] });
  google.charts.setOnLoadCallback(drawBasic);
  var counties = variables.map((variable) => variable.destination);
  var newCounties = counties.slice(0, 9);
  console.log(newCounties);

  var donations = variables.map((variable) => {
    return parseInt(variable.quantity.split(" ")[0]);
  });
  var newDonations = donations.slice(0, 9);
  console.log(newDonations);
  function drawBasic() {
    var dataArray = [["County", "Donation Quantity"]]; // Header row
    dataArray = dataArray.concat(
      newCounties.map((county, index) => [county, newDonations[index]])
    );
    var data = google.visualization.arrayToDataTable(dataArray);

    var options = {
      title: "Donations To Various Kenyan Counties",
      chartArea: { width: "50%" },
      hAxis: {
        title: "Donation Quantity",
        minValue: 0,
      },
      vAxis: {
        title: "County",
      },
    };

    var chart = new google.visualization.BarChart(
      document.getElementById("chart_div_2")
    );

    chart.draw(data, options);
  }
  return (
    <>
      <script
        type="text/javascript"
        src="https://www.gstatic.com/charts/loader.js"
      ></script>
      <div id="chart_div_2"></div>
      {/* {variables.map((variable) => {
        const { quantity, destination } = variable;
        return (
          <p>
            {parseInt(quantity.split(" ")[0])} vs {destination}
          </p>
        );
      })} */}
    </>
  );
};
/* <p>graph number of donations quantity vs destination</p>; */
