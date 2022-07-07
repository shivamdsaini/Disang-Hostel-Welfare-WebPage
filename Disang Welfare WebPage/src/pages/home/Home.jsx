import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

import "./home.css"

import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
    <Navbar />
     <Header />
    <div className="homeContainer">
     <Footer/>
    </div>
   </div>
  );
};

export default Home;