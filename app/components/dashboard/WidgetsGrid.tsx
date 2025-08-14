'use client'
import {SimpleWidget} from "@/app/components";
import {IoCalculator, IoHeartOutline} from "react-icons/io5";
import React from "react";
import {MdCatchingPokemon} from "react-icons/md";
import {useCounterStore} from "@/app/store";
const dashboardItems = [
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40} />,
        title: 'Counter',
        subTitle: 'Contador del cliente',
        label: ''
    },
    {
        path: '/dashboard/pokemons',
        icon: <MdCatchingPokemon size={40} />,
        title: 'Pokemones',
        subTitle: 'Pokedex',
        label: ''
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartOutline size={40} />,
        title: 'Favoritos',
        subTitle: 'Global state',
        label: ''
    },
]
export function WidgetsGrid() {
    const counter = useCounterStore(state => state.count);
    dashboardItems[0].label = `${counter}`
    return (
        <div className="flex flex-wrap p-2">
            {
                dashboardItems.map((item) => (
                    <SimpleWidget
                        key={item.path}
                        title={item.title}
                        subTitle={item.subTitle}
                        label={item.label}
                        icon={item.icon}
                        href={item.path}/>
                ))
            }
        </div>
    )
}
