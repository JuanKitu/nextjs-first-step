'use client';
import {useEffect} from 'react'
import {Button} from "@/app/components";
import {IoAddCircle, IoRemoveCircle} from "react-icons/io5";
import {CartCounterProps} from "@/app/shopping-cart/components/CartCounter.interface";
import {useCounterStore} from "@/app/store";

export function CartCounter({value}:CartCounterProps) {
    const counter = useCounterStore(state => state.count);
    const setIncrement = useCounterStore(state => state.setIncrement);
    const setDecrement = useCounterStore(state => state.setDecrement);
    // Inicializar solo cuando value cambie
    useEffect(() => {
        if (value != null) {
            setIncrement(value);
        }
    }, [value, setIncrement]);
    return (
        <>
            <span className="text-9xl">{counter}</span>
            <div>
                <Button
                    size="md"
                    variant="success"
                    icon={<IoAddCircle />}
                    onClick={()=> setIncrement(1)}
                >
                    1
                </Button>
                <Button
                    size="md"
                    variant="success"
                    icon={<IoRemoveCircle />}
                    onClick={()=> setDecrement(1)}
                >
                    1
                </Button>
            </div>
        </>

    )
}
