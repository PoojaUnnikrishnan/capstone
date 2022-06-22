// Styling components using styled components
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 50px;
  justify-content: space-around;
  gap: 10%;
`;
export const Maincontainer = styled.div`
  width: 20rem;
  height: 20rem;
  margin-top: 15%;
  margin-bottom: 30%;
  box-shadow: black 0 0 15px;
  border-radius: 20px;
  border-collapse: collapse;
  > img {
    width: 20rem;
    height: 20rem;
    border-radius: 20px;

    cursor: pointer;
    :hover {
      opacity: 0.5;
      width: 20rem;
      height: 20rem;
    }
  }
`;
export const Text = styled.div`
  width: 15rem;
  height: 3rem;
  margin-left: 20px;
  text-align: center;
  font-weight: bold;
  color: black;
  font-size: medium;
  cursor: pointer;
`;
export const MobileVet = styled.div`
  margin-bottom: 100px;
`;
export const Image = styled.div`
  display: flex;
  justify-content: center;
  > img {
    height: 190px;

    border-radius: 10px;
  }
`;
export const Description = styled.div`
  display: flex;
  justify-items: center;
  font-size: 14px;
  margin: 20px 0;
  text-indent: 2cm;
`;

export const DivSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Section = styled.div`
  height: 400px;
  width: 400px;
  position: relative;
  border-radius: 5px;
`;
export const Div = styled.div`
  overflow: hidden;
`;
export const Image1 = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 1s;
  border-radius: 5px;
  :hover {
    transform: scale(1.2);
  }
`;
export const Bold = styled.h1`
  justify-content: center;
  margin-left: 12.5px;
`;
export const Paragraph = styled.div`
  justify-content: center;
  margin-left: 12.5px;
  height: 250px;
  text-indent: 4px;
  margin-right: 9.5px;
`;

export const Text1 = styled.h3`
  justify-content: center;
  display: flex;

  padding: 10px;
`;
export const Form = styled.div`
  margin: 25px 0;
`;
export const Bookings = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 70px;
`;
export const Payment = styled.div`
  width: 500px;
  box-shadow: 0px 1px 16px;
  border-color: rgb(216, 212, 212);
  border-width: 1px;
  border-style: solid;
  border-radius: 20px;
`;
export const Containers = styled.div`
  display: flex;

  flex-direction: wrap;

  justify-content: center;
`;
export const HeadingTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: "center";
  font-weight: bolder;
  font-size: 20px;
  background-color: #ffd301;
  margin-top: 2%;
`;
export const Text2 = styled.h1``;
export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  font-weight: 700;
  margin: 10px;
  text-align: center;
`;
