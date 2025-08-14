'use client'
import {SimpleWidget} from "@/app/components";
import {IoCartOutline, IoHeartOutline} from "react-icons/io5";
import React from "react";
import {MdCatchingPokemon} from "react-icons/md";
import {useCounterStore} from "@/app/store";
interface DashboardItem {
    path?: string;
    icon?: React.ReactNode;
    title: string;
    subTitle?: string;
    label?: string;
    href?: string;
}
const dashboardItems: DashboardItem[] = [
    {
        path: '/dashboard/counter',
        icon: <IoCartOutline size={70} className="text-blue-600" />,
        title: 'Counter',
        subTitle: 'Contador del cliente',
        label: 'contador'
    },
    {
        path: '/dashboard/pokemons',
        icon: <MdCatchingPokemon size={70} className="text-blue-600" />,
        title: 'Pokemones',
        subTitle: 'Pokedex',
        label: ''
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartOutline size={70} className="text-blue-600" />,
        title: 'Favoritos',
        subTitle: 'Global state',
        label: ''
    },
]
export function WidgetsGrid() {
    const counter = useCounterStore(state => state.count);
    dashboardItems[0].title = `${counter}`
    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            {
                dashboardItems.map((item: DashboardItem) => (
                    <SimpleWidget key={item.path} title={item.title} subTitle={item.subTitle} label={item.label} icon={item.icon} href={item.path}/>
                ))
            }
        </div>
    )
}
