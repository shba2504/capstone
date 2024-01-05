import React, { useState } from "react";

const BookingForm = (props) => {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleChange = (e) => {
    setResDate(e);
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
            <option value=""></option>
            <option value="5:00">5:00 PM</option>
            <option value="5:30">5:30 PM</option>
            <option value="6:00">6:00 PM</option>
            <option value="6:30">6:30 PM</option>
            <option value="7:00">7:00 PM</option>
            <option value="7:30">7:30 PM</option>
            <option value="8:00">8:00 PM</option>
            <option value="8:30">8:30 PM</option>
            <option value="9:00">9:30 PM</option>
          </select>
        </div>
        <div className="Field">
          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            placeholder="2"
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
