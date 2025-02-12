import { createContext, useState, useMemo } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)

    const value = useMemo(() => ({
        count,
        setCount
    }), [count]); // Dependencias: count

    return(
        <ShoppingCartContext.Provider value={value}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartProvider , ShoppingCartContext}