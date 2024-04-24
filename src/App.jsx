import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import InvestorsTable from "./Components/InvestorsTable";
import InvestorDetails from "./Components/InvestorDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InvestorsTable />} />
        <Route path="/investors/:firm_id" element={<InvestorDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
