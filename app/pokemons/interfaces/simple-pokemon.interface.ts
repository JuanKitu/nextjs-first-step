export interface SimplePokemon {
    id: string;
    name: string;
}
export interface SimplePokemonProps {
    pokemon: SimplePokemon;
}
export interface PokemonGridProps {
    pokemons: SimplePokemon[];
}