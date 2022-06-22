import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { removeFromForms } from "../../features/bookingslice";
const Bookings = () => {
  const dispatch = useDispatch();
  const { bookingItems } = useSelector((state) => state.bookings);
  const handleRemovefromFoms = (data) => {
    dispatch(removeFromForms(data));
  };
  return (
    <>
      {bookingItems.length === 0 ? (
        <div
          className="no-bookings"
          style={{
            fontSize: "20px",
            marginTop: "2rem",
            color: "rgb(84, 84, 84)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>There are no bookings.</p>
          <div
            className="start-vet"
            style={{
              color: "gray",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              marginLeft: "0.5rem",
            }}
          >
            <Link to="/Vet">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start booking Services</span>
            </Link>
          </div>
        </div>
      ) : (
        <BookingContainer>
          {bookingItems.map((data, index) => (
            <div className="bookcontainer" key={index}>
              <div style={{ width: "300px", margin: "20px" }}>
                <img
                  src={data.Image}
                  alt=""
                  style={{
                    width: "350px",
                    height: "200px",
                    marginRight: "20px",
                  }}
                />
                <h2 style={{ color: "#4b70e2" }}>Slot: {data.slots}</h2>
                <h2>{data.Service}</h2>
              </div>
              <div style={{ margin: "20px", width: "300px" }}>
                <h2>Service charge: ₹{data.price}</h2>
                <h2>
                  Name: {data.FirstName}
                  {data.LastName}
                </h2>
                <h2>Email: {data.email}</h2>
                <h2>Contact: {data.ContactNo}</h2>
                <h2>Address: {data.Address}</h2>
                <button
                  style={{
                    border: "1px",
                    outline: "1px",
                    borderRadius: "5px",
                    marginTop: "0.7rem",
                    padding: "3px",
                    cursor: "pointer",
                    backgroundColor: "rgb(251, 57, 57)",
                    margin: "0",
                  }}
                  onClick={() => handleRemovefromFoms(data)}
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          ))}
        </BookingContainer>
      )}
    </>
  );
};

const BookingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;
  .bookcontainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem auto;
    padding: 1rem;
    border-radius: 15px;
    width: 400px;
    height: 480px;
    box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
      2px 2px 5px rgba(94, 104, 121, 0.3);
  }
`;
export default Bookings;
