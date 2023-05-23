import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Content from "../../components/content/Content";
import "./home.scss";
import Footer from "../../components/footer/Footer";
function Home() {
  return (
    <div className="home">
      <Sidebar />

      <div className="homeContainer">
        <Content />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
