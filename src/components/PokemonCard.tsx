
export const PokemonCard = ({name}: {name: string}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
        </h2>
      </div>
    </div>
  );
};
