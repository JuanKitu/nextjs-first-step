import React from 'react'
import {PokemonGridProps} from "@/app/pokemons";
import {PokemonCard} from "./PokemonCard";
export function PokemonGrid({pokemons}:PokemonGridProps) {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {
                pokemons.map( (pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))
            }
        </div>
    )
}
