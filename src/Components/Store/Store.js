import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { section } from "./data";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Store = () => {
  const slideImages = [
    {
      url: 'https://www.seekpng.com/png/full/3-39193_happy-birthday-if-you-have-clicked-through-to.png',
      caption: 'Slide 1'
    },
    {
      url: 'https://thumbs.dreamstime.com/b/collage-different-dogs-white-background-banner-design-179886014.jpg',
      caption: 'Slide 2'
    },
    {
      url: 'https://image.shutterstock.com/image-photo/collage-different-dogs-on-white-260nw-1724568655.jpg',
      caption: 'Slide 3'
    },
  ];
  return (
    <div style={{ backgroundcolor: "#b5aa74" }}>
      {/* <Banner>
        <img
          src="http://atlbrescue.org/resources/banner1.jpg?timestamp=1346122477510"
          alt="Category"
        />
      </Banner> */}
      <Banner>
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index} style={{alignItems: 'center'}}>
           <img src={slideImage.url} alt="Category"  style={{
                   height: '350px',
                   width: '1400px'
                  }}/>  
            </div>
          ))} 
        </Slide>
      </div>
      </Banner>
      <Categories>
        {section.map((data, index) => {
          return (
            <Link to={`/store/${data.id}`} state={data} key={index}>
              <Catergory>
                <img src={data.imageurl} alt="Category" />
                <Typography
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "black",
                  }}
                >
                  {data.name}
                </Typography>
              </Catergory>
            </Link>
          );
        })}
      </Categories>
    </div>
  );
};

const Banner = styled.div`
align-items: center;
margin-left:80px;
margin-right:80px;
 height: 350px;
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
const Catergory = styled.div`
  box-shadow: inset rgb(50 50 93 / 25%) 15px 10px 14px -20px;
  margin-bottom: 20px;
  > img {
    margin: 50px;
    background-color: #ffd301;
    border-radius: 5%;
    width: 150px;
    height: 150px;
    :hover {
      opacity: 0.5;
    }
    cursor: pointer;
  }
`;

export default Store;
