import React from "react";
import Sidebar from "../components/Sidebar"

import "../styles/dashboard.css";

function Dashboard() {
  return (
    <>  

      <div className="container">
        <h1>Página de Dashboard</h1>
        <Sidebar />
      </div>

    </>
  );
}

export default Dashboard;