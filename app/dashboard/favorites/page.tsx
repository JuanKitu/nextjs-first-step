import {PokemonFavoritesGrid} from "@/app/pokemons";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Favorites',
    description: 'Favorites page',
}

export default async function FavoritesPage() {
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pókemons Favoritos <small>Global state</small></span>
            <PokemonFavoritesGrid/>
        </div>
    )
}
