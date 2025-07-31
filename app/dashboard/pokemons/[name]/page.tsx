import React from 'react'
import {Pokemon} from "@/app/pokemons/interfaces/pokemon.interface";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import {PokemonInfo} from "@/app/pokemons";
interface Props {
    params: Promise<{ name: string }>;
}
export async function generateStaticParams() {
    const fetchPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`, {
        cache: 'force-cache',
    }).then( res => res.json())
    return fetchPokemon.results.map( (pokemon: Pokemon) => ({ name: pokemon.name }))
}
export async function generateMetadata(props: Props):Promise<Metadata> {
    const params = await props.params;
    try {
        const {id, name} = await getPokemon(params.name)
        return {
            title: `#${id} - ${name}`,
            description: `Pokemon ${name}`,
        };
    } catch(error){
        void error;
        return {
            title: 'Pokemon not found',
            description: 'Pokemon not found',
        }
    }
}
const getPokemon = async (id: string): Promise<Pokemon> => {
    try {
        return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
            cache: 'force-cache',
        }).then( res => res.json())
    } catch (error) {
        void error;
        notFound();
    }

}

export default async function PokemonPage(props: Props) {
    const params = await props.params;

    const pokemon = await getPokemon(params.name);


    return (
        <PokemonInfo pokemon={pokemon} />
    );
}
