import React from 'react'
import {Pokemon} from "@/app/pokemons/interfaces/pokemon.interface";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import {PokemonInfo} from "@/app/pokemons";
interface Props {
    params: Promise<{ id: string }>;
}
/*export async function generateStaticParams() {
    const staticPokemon: string[] = Array.from({length: 151}).map((v, index) => `${index + 1}`);
    return staticPokemon.map(id => ({ id }))
}*/
export async function generateMetadata(props: Props):Promise<Metadata> {
    const params = await props.params;
    try {
        const {id, name} = await getPokemon(params.id)
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

    const pokemon = await getPokemon(params.id);


    return (
        <PokemonInfo pokemon={pokemon} />
    );
}
