import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TrainReservationPage from './components/TrainReservationPage';
import TicketPage from './components/TicketPage';


function App() {
  return (
    <Router>
      <Link to="/"></Link>
      <Routes>
        <Route path="/" element={<TrainReservationPage />} />
        <Route path="/ticket" exact component={TicketPage} />
        {/* <Route path="/TicketPage" element={<TicketPage/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
