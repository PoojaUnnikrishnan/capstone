import "./Adoption.css";
import data from "./data.json";
import { Link } from "react-router-dom";
export default function Adoption() {
  const dogInfo = data.map((doggie) => {
    return (
      <div key={doggie.id} className="dog-list">
        <Link to={`/adoption/${doggie.id}`} state={doggie}>
          <img alt={doggie.Breed} src={doggie.image} width={300} />
          <h2>
            <em> Breed:</em>
            {doggie.Breed}
          </h2>

          <h2>
            <em> Approx Age:</em>
            {doggie["Approx Age"]}
          </h2>
        </Link>
      </div>
    );
  });
  return <div className="dog-container">{dogInfo}</div>;
}
