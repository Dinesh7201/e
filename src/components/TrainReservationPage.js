import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const TrainReservationPage = () => {
  const history = useHistory();
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [seatNumber, setSeatNumber] = useState(null);
  const [reservedSeats, setReservedSeats] = useState([]);
  const [ticket, setTicket] = useState(null);

  const trains = [
    { id: 1, name: 'Express Train', totalSeats: 50 },
    { id: 2, name: 'Local Train', totalSeats: 100 },
    { id: 3, name: 'Superfast Train', totalSeats: 75 },
  ];

  const handleTrainSelect = (trainId) => {
    setSelectedTrain(trainId);
    setSeatNumber(null);
  };

  const handleSeatSelect = (seatNumber) => {
    setSeatNumber(seatNumber);
  };

  const handleSeatReservation = () => {
    if (seatNumber !== null && !reservedSeats.includes(seatNumber)) {
      setReservedSeats([...reservedSeats, seatNumber]);
      setSeatNumber(null);
      const ticketNumber = `TICKET-${Math.floor(Math.random() * 1000000)}`;
      const newTicket = {
        train: trains[selectedTrain - 1].name,
        seat: seatNumber,
        ticketNumber: ticketNumber,
      };
      setTicket(newTicket);
      history.push('/ticket', { ticket: newTicket }); // Pass ticket as state to the 'ticket' route
    }
  };

  return (
    <div className="container">
      <h1>Train Reservation Page</h1>
      <div>
        <h2>Select a Train:</h2>
        <ul>
          {trains.map((train) => (
            <li
              key={train.id}
              onClick={() => handleTrainSelect(train.id)}
              className={selectedTrain === train.id ? 'selected' : ''}
            >
              {train.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedTrain && (
        <div>
          <h2>Select a Seat:</h2>
          <div className="seat-container">
            {Array.from({ length: trains[selectedTrain - 1].totalSeats }, (_, index) => (
              <div
                key={index}
                onClick={() => handleSeatSelect(index + 1)}
                className={`seat ${reservedSeats.includes(index + 1) ? 'reserved' : ''} ${
                  seatNumber === index + 1 ? 'selected' : ''
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <button onClick={handleSeatReservation} disabled={seatNumber === null}>
            Reserve Seat
          </button>
        </div>
      )}
    </div>
  );
};

export default TrainReservationPage;
