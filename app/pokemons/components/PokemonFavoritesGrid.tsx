"use client"
import React, {useState} from 'react'
import {PokemonCard} from "./PokemonCard";
import {usePokemonStore} from "@/app/store";
import {NoFavorites} from "@/app/pokemons/components/NoFavorites";
export function PokemonFavoritesGrid() {
    const listPokemons = Object.values(usePokemonStore(state => state.pokemons));
    const [pokemons, setPokemons] = useState(listPokemons)
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {
                pokemons.length === 0 ? <NoFavorites/> :
                pokemons.map( (pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))
            }
        </div>
    )
}