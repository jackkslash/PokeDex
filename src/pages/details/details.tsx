import { useNavigate, useLocation } from 'react-router-dom'
import { QueryCache, useQuery } from 'react-query'
import axios from 'axios';


export const Details = (LinkProps: any) => {

const location = useLocation();
const pokemon = location.state;

const navigate = useNavigate();

const { isLoading, isError, data, error } = useQuery("pokemon", () =>
    axios.get("https://pokeapi.co/api/v2/pokemon/"+pokemon).then((res) => res.data)
  );



  if (isLoading) return <>"Loading..."</>;

  if (error) return <>"An error has occurred: "</>;

  const types = data.types;
  console.log(types)

  const mapResults = types.map((results: any) => {
    return (
      <>
        {results.type.name}
      </>
    );
  });


  return (
    
    <><div>details {data.name}{data.height}</div>
    <div><img src={data.sprites.front_default} alt="" />
    <div>{mapResults}</div>
    </div>
            <button className="btn" onClick={() => navigate(-1)}>Back</button>
    </>
    
  )
}
