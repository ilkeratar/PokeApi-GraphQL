import { useQuery,gql } from '@apollo/client';
import {getPokemonList} from './Query/getPokemonList';
import PokedexItem from './components/PokedexItem';
import Abilities from './components/Abilities';



function App() {
  const { loading, error, data } = useQuery(gql(getPokemonList));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <p>Error : {<h1>No Data</h1>}</p>;
  const pokemons=data.pokemon_v2_pokemon;
  const abilities=data.pokemon_v2_ability;


  return (
      <div>
        <h1 className='bg-slate-400 w-2/3 h-[800px] m-auto text-white'>
        <div className="flex">
        <div className="w-1/2 h-[800px] overflow-scroll">
          {pokemons.slice(0,10).map((item: any) => {
            return <PokedexItem key={item.id} item={item} />;
          })}
        </div>

        <div className="w-1/2 h-[800px] overflow-scroll">
          {abilities.slice(0,10).map((item: any) => {
            return <Abilities key={item.id} item={item} />;
          })}
        </div>
        
      </div>
        </h1>
      </div>

  )
}

export default App
