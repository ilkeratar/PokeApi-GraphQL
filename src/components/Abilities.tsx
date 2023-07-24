interface Ability {
  id: number;
  name: string;
}

interface AbilityItemProps {
  item: Ability;
}

const Abilities: React.FC<AbilityItemProps> = ({ item }) => {
  return (
    <div className=" h-[140px] border-black border-b-2 font-Montserrrat p-3">
      <p>ID: {item.id}</p>
      <h1>Name: {item.name}</h1>
    </div>
  );
};

export default Abilities;
