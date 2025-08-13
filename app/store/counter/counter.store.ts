import {type StateCreator} from "zustand/vanilla";
import {create} from "zustand";
import {devtools} from "zustand/middleware/devtools";
import {persist} from "zustand/middleware/persist";

interface CounterState {
    count: number;
    isReady: boolean;
}
interface CounterActions {
    increment: () => void;
    decrement: () => void;
    //reset: () => void;
}
export type CounterStore = CounterState & CounterActions;
const storeAPI: StateCreator<CounterStore> =(set, get) => ({
    count: 0,
    isReady: false,
    increment: () => set(state => ({count: state.count + 1})),
    decrement: () => set(state => {
        const valueCount = get().count;
        if(valueCount > 0){
            return {count: state.count - 1}
        } else {
            return {count: 0}
        }
    }),
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