import React, { useState } from "react";

const BookingForm = () => {
  const [resDate, setResDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [makeYourReservation, setMakeYourReservation] = useState("");
  const [availableTimes, setavailableTimes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking has been confirmed!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Book Reservation</h2>
        <div className="Field">
          <label htmlFor="res-date">Select Date:</label>
          <input
            type="date"
            id="res-date"
            value={resDate}
            onChange={(e) => setResDate(e.target.value)}
          />
        </div>
        <div className="Field">
          <label htmlFor="res-time">Select Time:</label>
          <select
            id="res-time"
            value={availableTimes}
            onChange={(e) => setavailableTimes(e.target.value)}
          >
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
        </div>
        <div className="Field">
          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        <div className="Field">
          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <input
          type="submit"
          value={makeYourReservation}
          onChange={(e) => setMakeYourReservation(e.target.value)}
        />
      </fieldset>
    </form>
  );
};

export default BookingForm;
