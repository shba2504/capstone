import React, { useState } from "react";

const BookingForm = (props) => {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleChange = (e) => {
    setResDate(e);
    dispatch({ type: "update_times", setResDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking has been confirmed!");
    clearForm();
  };

  const getIsFormValid = () => {
    return resDate && resTime && guests;
  };

  const clearForm = () => {
    setResDate("");
    setResTime("");
    setGuests("");
    setOccasion("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Reservations</h2>
        <div className="Field">
          <label htmlFor="res-date">Select Date:</label>
          <input
            type="date"
            id="res-date"
            value={resDate}
            onChange={(e) => handleChange(e.target.value)}
            required
          />
        </div>
        <div className="Field">
          <label htmlFor="res-time">Select Time:</label>
          <select
            id="res-time"
            value={resTime}
            onChange={(e) => setResTime(e.target.value)}
            required
          >
            {props.availableTimes.availableTimes.map((availableTime) => (
              <option key={availableTime}>{availableTime}</option>
            ))}
          </select>
        </div>
        <div className="Field">
          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            min="2"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        <div className="Field">
          <label htmlFor="occasion">Special Occasion:</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <button
          type="submit"
          className="book"
          disabled={!getIsFormValid()}
          onSubmit={handleSubmit}
        >
          Book Reservation
        </button>
      </fieldset>
    </form>
  );
};

export default BookingForm;
