import BookingForm from "./BookingForm";
import Nav from "./Nav";
import React, { useState } from "react";

const BookingPage = (props) => {
  return (
    <>
      <Nav />
      <BookingForm
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
      />
    </>
  );
};

export default BookingPage;
