'use client';
import React from 'react'
import {Button} from "@/app/components";
import {IoAddCircle, IoRemoveCircle} from "react-icons/io5";
import {useState} from "react";
import {CartCounterProps} from "@/app/shopping-cart/components/CartCounter.interface";

export function CartCounter({value}:CartCounterProps) {
    const [counter, setCounter] = useState(value ?? 5);
    const reduceCounter = () => {
        if(counter > 0) {
            setCounter(counter - 1)
        }
    }
    return (
        <>
            <span className="text-9xl">{counter}</span>
            <div>
                <Button
                    size="md"
                    variant="success"
                    icon={<IoAddCircle />}
                    onClick={() => setCounter(counter + 1)}
                >
                    1
                </Button>
                <Button
                    size="md"
                    variant="success"
                    icon={<IoRemoveCircle />}
                    onClick={reduceCounter}
                >
                    1
                </Button>
            </div>
        </>

    )
}
