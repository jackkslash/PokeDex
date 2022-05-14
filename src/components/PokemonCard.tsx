import { Link } from "react-router-dom";
import { GetImageById } from "../util/Utils";


export const PokemonCard = ({ props, index }: { props: any, index: string }) => {

  let pokemonId = index +1;
  let pokemon = props.name;

  return (
    <div className="flex flex-row justify-center font-pkmn pb-4 ">
      <div
        tabIndex="0"
        className="collapse border border-base-300 bg-base-100 rounded-box"
      >
        <div className="flex flex-row space-x-10 collapse-title text-xl font-medium p-2 items-center ">
          <h1 className ="capitalize">{pokemon}</h1> <div>{index + 1}/803</div>
        </div>
        <div className="collapse-content mx-auto">
          <img src={GetImageById(pokemonId)}></img>
        </div>
        <Link to="/Details" state={pokemon}><button className="btn">Button</button></Link>      </div>
    </div>
  );
};
