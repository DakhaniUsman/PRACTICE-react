import { createContext, useReducer } from "react";

export const MyCounterContext = createContext();

// HOC

function Reducer (state,action) {
    switch (action.type){
        case "INCREMENT" :
            return {...state, counter : state.counter + 1};
        case "DECREMENT" :
            return {...state, counter : state.counter - 1};
        case "RESET" :
            return {counter : 0}
        default :
            return {counter : state.counter}
    }

}

const Initialstate = {counter : 0}

const ParentCounterContext = ({children}) => {

    const [state,dispatch] = useReducer(Reducer, Initialstate);

    return (
        <MyCounterContext.Provider value={{state,dispatch}}>
            {children}
        </MyCounterContext.Provider>
    )
}

export default ParentCounterContext;