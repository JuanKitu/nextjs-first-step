import {type StateCreator} from "zustand/vanilla";
import {create} from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CounterState {
    count: number;
    isReady: boolean;
}
interface CounterActions {
    setIncrement: (value:number) => void;
    setDecrement: (value:number) => void;
    resetCount: (value: number) => void;
    initCounterState: (value: number) => void;
}
export type CounterStore = CounterState & CounterActions;
const storeAPI: StateCreator<CounterStore> =(set, get) => ({
    count: 0,
    isReady: false,
    setIncrement: (value) => set(state => ({count: state.count + value})),
    setDecrement: (value) => set(state => {
        const valueCount = get().count - value;
        if(valueCount > 0){
            return {count: state.count - value}
        } else {
            return {count: 0}
        }
    }),
    resetCount: (value) => set({count: value}),
    initCounterState: (value) => set(()=> {
        const isReady = get().isReady;
        if(!isReady){
            return {count: value, isReady: true};
        }
        return {count: get().count};
    })
});

export const useCounterStore = create<CounterStore>()(
    devtools(
        persist(
            storeAPI,
            {
                name: 'counter-store'
            }
        )
    )
);