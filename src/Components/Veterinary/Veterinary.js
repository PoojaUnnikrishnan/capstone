//importing necessary modules to use in file.
import React from "react";
import { Link } from "react-router-dom";

import { Services } from "./Data/Services";

import { Text, Maincontainer, Container } from "./Styling";

const Veterinary = () => {
  return (
    <Container>
      {/* mapping through the json data in services object. and fetching values from it. */}
      {Services.map((data, index) => {
        return (
          <>
            {/* if id=1 it displays helpline number otherwise it wont. */}
            {data.id === 1 ? (
              <Link
                to={`/vet/${data.id}`}
                state={data}
                style={{ textDecoration: "none" }}
              >
                <Maincontainer key={index}>
                  <img src={data.image} alt="serviceImage" />

                  <Text>
                    {data.service}
                    <br></br>
                    Help Line No: x
                  </Text>
                </Maincontainer>
              </Link>
            ) : (
              <Link
                to={`/vet/${data.id}`}
                state={data}
                style={{ textDecoration: "none" }}
              >
                <Maincontainer key={index}>
                  <img src={data.image} alt="serviceImage" />

                  <Text>{data.service}</Text>
                </Maincontainer>
              </Link>
            )}
          </>
        );
      })}
    </Container>
  );
};

export default Veterinary;
