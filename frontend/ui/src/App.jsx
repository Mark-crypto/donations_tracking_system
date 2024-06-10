import Home from "./components/Home";
import Footer from "./components/sub-components/Footer";
import Navbar from "./components/sub-components/Navbar";

//navlink has active or inactive attributes
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
