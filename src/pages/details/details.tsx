import { useNavigate, useLocation } from "react-router-dom";
import { QueryCache, useQuery } from "react-query";
import axios from "axios";
import { GetImageById } from "../../util/Utils";

export const Details = (LinkProps: any) => {
  const location = useLocation();
  const pokemon = location.state;

  const navigate = useNavigate();

  const { isLoading, isError, data, error } = useQuery("pokemon", () =>
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + pokemon)
      .then((res) => res.data)
  );

  if (isLoading) return <>"Loading..."</>;

  if (error) return <>"An error has occurred: "</>;

  const types = data.types;
  console.log(types);

  const mapResults = types.map((results: any) => {
    return (
      <>
        <div>{results.type.name}</div>
      </>
    );
  });

  return (
    <>
      <div className="flex flex-row card w-96 bg-base-100 shadow-xl justify-center mx-auto my-10 font-pkmn">
        <div className="card-body">
          <h2 className="card-title capitalize">{data.name}</h2>
          <img src={GetImageById(data.id)} alt="" />
          <p>Height: {data.height}</p>
          <div className="capitalize">{mapResults}</div>
        </div>
      </div>
      <button className="btn flex flex-row mx-auto mb-6" onClick={() => navigate(-1)}>
          Back
        </button>
    </>
  );
};
