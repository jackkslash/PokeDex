import { useQuery } from "react-query";
import logo from "./logo.svg";
import axios from "axios";
import { PokemonCard } from "./components/PokemonCard";

function App() {
  const { isLoading, isError, data, error} = useQuery("repoData", () =>
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => res.data)
  );

  if (isLoading) return <>"Loading..."</>;

  if (error) return <>"An error has occurred: "</>;

  const mapResults = data.results.map((results : any) => 
  {
    return <><PokemonCard name={results.name}/></>
    
  })

  return (
    <div>
      {mapResults}
    </div>
  );
}

export default App;
