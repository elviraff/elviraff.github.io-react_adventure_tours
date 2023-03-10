import React, { useState } from 'react'

export const useCount = (initialState=0) => {
    const [count, setCount] = useState(initialState)
    const decrement = () => setCount(count>0 ? count-1 : 0)
    const increment = () => setCount(count+1)

    return {count, decrement, increment}
}