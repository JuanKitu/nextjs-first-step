import React from 'react'
import {CartCounter} from "@/app/shopping-cart/components";

export default function CounterPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Productos en el carrito de compras</span>
            <CartCounter value={3} />

        </div>
    )
}