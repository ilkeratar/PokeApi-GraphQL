interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
}

interface PokedexItemProps {
  item: Pokemon;
}

const PokedexItem: React.FC<PokedexItemProps> = ({ item }) => {
  return (
    <div className=" h-[140px] border-black border-b-2 font-Montserrrat p-3">
      <p>ID: {item.id}</p>
      <h1>Name: {item.name}</h1>
      <h1>Height: {(item.height * 0.1).toFixed(1)} M</h1>
      <h1>Weight: {item.weight * 0.1} Kg</h1>
    </div>
  );
};

export default PokedexItem;
