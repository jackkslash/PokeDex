import { Link } from "react-router-dom";
import { GetImageById } from "../util/Utils";

export const PokemonCard = ({
  props,
  index,
}: {
  props: any;
  index: string;
}) => {
  let pokemonId = index + 1;
  let pokemon = props.name;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl font-pkmn m-4">
      <figure>
        {" "}
        <img src={GetImageById(pokemonId)}></img>
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize justify-center pb-2">
          {pokemon} {index + 1}/803
        </h2>
        <div className="card-actions justify-center">
          <Link to={"/Details/"+pokemon} state={pokemon}>
            <button className="btn">More Info</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
