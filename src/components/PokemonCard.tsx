import { GetImageById } from "../util/Utils";


export const PokemonCard = ({ props, index }: { props: any, index: string }) => {

  let pokemonId = index +1;
  return (
    <div className="flex flex-row justify-center ">
      <div
        tabIndex="0"
        className="collapse border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          {props.name} {index + 1}/803
        </div>
        <div className="collapse-content">
          <img src={GetImageById(pokemonId)}></img>
        </div>
      </div>
    </div>
  );
};
