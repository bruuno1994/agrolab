import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/home.css'

function Home() {
    return (
      <>
        <div>
          <Header />

          <div className="container">
                  <h1>AgroLab</h1>
                  <h2>Inovando na Terra e na Estufa</h2>
                  <img src='/agrolab.png' alt="logo do projeto"/>
              </div>
        </div>
        <Footer />
      </>
    );
  }
  
  export default Home;