import {SimplePokemon} from "@/app/pokemons";
import {StateCreator} from "zustand/vanilla";
import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {persist} from "zustand/middleware";

interface PokemonState {
    pokemons: Record<string, SimplePokemon>
}
interface PokemonActions {
    toggleFavorite: (pokemon:SimplePokemon) => void;
}

type PokemonStore = PokemonState & PokemonActions;

const storeAPI: StateCreator<
    PokemonStore,
    [["zustand/immer", never]],
    [],
    PokemonStore
>  = ((set) => {
    return {
        pokemons: {
            '1': {id: '1', name: 'Bulbasaur'},
        }
        ,
        toggleFavorite: (pokemon) =>
            set((state) => {
                if (!!state.pokemons[pokemon.id]) {
                    delete state.pokemons[pokemon.id];
                    return;
                }
                state.pokemons[pokemon.id] = pokemon;
                return;
            }),
    }
});

export const usePokemonStore = create(
    persist(
        immer(
            storeAPI
        ),
        {
            name: 'pokemon-store'
        }
    )
);