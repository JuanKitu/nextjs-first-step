import React from 'react'
import {PokemonsResponse, SimplePokemon, PokemonGrid} from "@/app/pokemons";

const getPokemons = async (limit = 10, offset = 0 ): Promise<SimplePokemon[]> =>{
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, {
        cache:'force-cache'
    }).then( res => res.json())
    const pokemons = data.results.map( (pokemon) => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }));
    return pokemons
};
export default async function PokemonsPage() {
    const pokemons = await getPokemons(5);
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de Pókemons <small>estatico</small></span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    )
}
