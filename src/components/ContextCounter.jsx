import { useContext } from "react"
import { MyCounterContext } from "./context/CounterContext";

const ContextCounter = () => {

    const {state,dispatch} = useContext(MyCounterContext)

    function Increment () {
        dispatch({type : "INCREMENT"})
    }

    function Decrement () {
        dispatch({type : "DECREMENT"})
    }

    function Reset () {
        dispatch({type : "RESET"})
    }
    return (
        <div>
            <h1>Context Counter Page</h1>
            <h2>Counter : {state.counter} </h2>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>RESET</button>
        </div>
    )
}

export default ContextCounter;