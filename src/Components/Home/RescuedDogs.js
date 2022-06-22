import { useState, useEffect } from "react";
import { db} from "../../firebase";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore/lite";
import { Slide } from "react-slideshow-image";

function RescuedDogs() {
  const [users, setUsers] = useState([]);
  const usersCollerctionref =  collection (db,  "rescue");
 

  useEffect(() => {
    const getUsers = async () => {
      const data =  await getDocs (usersCollerctionref);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getUsers();
   
  }, []);

  return (
    <RescueContainer>
      <Slide>
    {users.map ((data , index) => {
      return <div> 
          <div className="bookcontainer" key={index}>
              <div style={{ width: "300px",margin: "15px" }}>
                <img
                  src={data.imgUrl}
                  alt=""
                  style={{
                    width: "700px",
                    height: "300px",
                  }}
                />
              </div>
              <div style={{alignSelf: "center" }}>
                <h2>
                  Name: {data.FirstName} {" "} {data.LastName}
                </h2>
                <h2>Email: {data.email}</h2>
                <h2>Contact: {data.ContactNo}</h2>
                <h2>Address: {data.Address}</h2>
                <h2>Pincode: {data.PinCode}</h2>
              </div>
            </div>
      </div>
    } )}
    </Slide>
    </RescueContainer>
  );
}

const RescueContainer = styled.div`
width:750px;
align-items: center;
height: 350px;
margin-bottom: 150px;
 
  .bookcontainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem auto;
    padding: 1rem;
    border-radius: 15px;
    width: 750px;
    height: 480px;
    box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
      2px 2px 5px rgba(94, 104, 121, 0.3);
  }
`;

export default RescuedDogs;