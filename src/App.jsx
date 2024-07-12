import WPPOOLIndex from "./components/WPPOOLIndex";
import Navbar from "./components/Navbar";
import IndexChart from "./components/IndexChat/IndexChart";
import Companies from "./components/Companies/Companies";
import PotentialListings from "./components/PotentialListings/PotentialListings";
import StoriesAndIdeas from "./components/StoriesAndIdeas/StoriesAndIdeas";
import AboutWppool from "./components/AboutWppool";
import PortfolioCompanies from "./components/PortfolioCompanies";
import Footer from "./components/Footer";
import StateOfUsa from "./components/StateOfUsa/StateOfUsa";

function App() {
  return (
    <div className="App">
      <Navbar />
      <WPPOOLIndex />
      <IndexChart />
      <Companies />
      <PotentialListings />
      <StateOfUsa />
      <StoriesAndIdeas />
      {/* <div className="h-[1px] w-full my-10 mx-10 bg-[#90B8F0]"></div> */}
      <AboutWppool />
      <PortfolioCompanies />
      <Footer />
    </div>
  );
}

export default App;
