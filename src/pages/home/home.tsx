import { useQuery } from "react-query";
import logo from "./logo.svg";
import axios from "axios";
import { PokemonCard } from "../../components/PokemonCard";

export const Home = () => {
  const { isLoading, isError, data, error } = useQuery("pokemonData", () =>
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => res.data)
  );

  if (isLoading) return <>"Loading..."</>;

  if (error) return <>"An error has occurred: "</>;

  const mapResults = data.results.map((results: any, index: string) => {
    return (
      <>
        <PokemonCard props={results} index={index}/>
      </>
    );
  });

  return <div className="pt-2">{mapResults}</div>;
};

export default Home;