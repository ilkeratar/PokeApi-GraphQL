const getPokemonList = `
query {
      pokemon_v2_pokemon {
        id
        name
        height
        weight
      }
      pokemon_v2_ability {
        name
        id
      }
    }
    `;

    export { getPokemonList };
