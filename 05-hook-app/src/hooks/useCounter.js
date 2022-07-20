import { useState } from "react"

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState( initialValue );

    const increment = ( value = 1) => {
        setCounter(current => current + value);
    }

    const decrement = ( value = 1) => {
        setCounter(current => current - value);
    }

    const reset = () => {
        setCounter( initialValue );
    }

    const setCount = (value) =>{
        setCounter(value);
    }

    return {
        counter,
        increment,
        decrement,
        reset,
        setCount
    }
}