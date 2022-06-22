import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";

import data from "../Adoption/data";
export default function DogDescription() {
  const [adopt,setAdopt] = useState(false);
  const params = useParams();
  console.log("Params", params);
  const doggie = data.find((dog) => dog.id === params.id);
  if(adopt) {
    return <Navigate to = "/forms"/>
  }
  return (
    <div className="dog-information">
      <h1> ABOUT DOG.. </h1>
      <h3>
      <em> Breed: </em> 
       {doggie.Breed}
       </h3>
      <img alt="Dog" src={doggie.image} width="300" />
      <h3>
      <em> Description: </em> 
      {doggie.description} 
      </h3>
      <h3>
      <em> Color: </em> {doggie.Color}
       </h3>
      <h3>
      <em> Rescued: </em> 
       {doggie["Rescued From"]} 
        </h3>
      <h3> <em> Life Expectancy: </em> {doggie["Life Expectancy"]} </h3>
      <h3><em> Approx Age: </em> {doggie["Approx Age"]} </h3> <br/>
      <br/>
      <button className = "button" onClick = {() => setAdopt(true)}> ADOPT</button>
      
    </div>
  );
}