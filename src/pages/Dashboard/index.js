import React from "react";
import { CardDashboard, Gap } from "../../components";

const Dashboard = () => {
  return (
    <div className="container">
      <Gap height={100} />
      <CardDashboard />
      <Gap height={30} />
     
    </div>
  );
};

export default Dashboard;
