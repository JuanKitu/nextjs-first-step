import {SimplePokemon} from "@/app/pokemons";
import {StateCreator} from "zustand/vanilla";
import {create} from "zustand";

interface PokemonState {
    pokemons: Record<string, SimplePokemon>
}
//interface PokemonActions {}

type PokemonStore = PokemonState/* & PokemonActions*/;

const storeAPI: StateCreator<PokemonStore> = (set => {
    return {
        pokemons: {
            '1': {id: '1', name: 'Bulbasaur'},
        }
    }
});

export const usePokemonStore = create(storeAPI);