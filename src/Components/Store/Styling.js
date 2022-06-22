import styled from "styled-components";
export const Vet = styled.div``;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: 14%;
  margin-bottom: 50px;
`;
export const Maincontainer = styled.div`
  width: 20rem;
  height: 20rem;
  margin-top: 25%;
  margin-right: 100px;
  margin-bottom: 20%;
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
export const MobileVet = styled.div``;
export const Image = styled.div`
  margin-top: 1%;
  margin-left: 27%;

  > img {
    height: 190px;
    margin-bottom: 35px;
    margin-top: 25px;
  }
`;
export const Description = styled.div`
  width: 60%;
  height: 40%;
  justify-items: center;
  margin-left: 20%;
  font-size: 14px;
  text-indent: 2cm;
`;

export const DivSection = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
`;

export const Section = styled.div`
  /* border: 1px solid #000000; */
  height: 400px;
  width: 400px;
  position: relative;
  border-radius: 5px;
`;
export const Div = styled.div`
  height: 225px;
  width: 398.5px;
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

export const Text1 = styled.h2`
  justify-content: center;
`;
export const Form = styled.div`
  width: 40%;
  height: 700px;
  font-size: 14px;
  /* background-color: #ffd301; */
  margin-top: 3%;
  margin-left: 31%;
  padding: 2%;
  border-radius: 15px;
  /* border: 1px solid #000; */
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
