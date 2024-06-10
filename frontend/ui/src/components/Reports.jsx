import Navbar from "./sub-components/Navbar";
import Footer from "./sub-components/Footer";

const Reports = () => {
  // Load the Visualization API and the corechart package.
  google.charts.load("current", { packages: ["corechart"] });

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Topping");
    data.addColumn("number", "Slices");
    data.addRows([
      ["Mushrooms", 3],
      ["Onions", 1],
      ["Olives", 1],
      ["Zucchini", 1],
      ["Pepperoni", 2],
    ]);

    // Set chart options
    var options = {
      title: "How Much Pizza I Ate Last Night",
      width: 400,
      height: 300,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(
      document.getElementById("chart_div")
    );
    chart.draw(data, options);
  }
  return (
    <>
      <Navbar />
      <button>Number of donations issued</button>
      <button>Number of recepients </button>
      <button>Number of counties supplied </button>
      <p>graph number of donations vs month</p>
      <p>graph number of donations vs region</p>
      <p>graph number of donations vs recepients</p>

      <div id="chart_div"></div>
      <Footer />
    </>
  );
};

export default Reports;
