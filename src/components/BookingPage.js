import BookingForm from "./BookingForm";
import Nav from "./Nav";
import React, { useState } from "react";

const BookingPage = () => {
  return (
    <>
      <Nav />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
};

export default BookingPage;
