import { createContext, useState, useMemo } from 'react'
import PropTypes from 'prop-types'; // Importar PropTypes
const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)
    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    // Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({})

    const value = useMemo(() => ({
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow
    }), [
        count,
        isProductDetailOpen,
        productToShow
    ]); // Dependencias: count

    return(
        <ShoppingCartContext.Provider value={value}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

// Validación de PropTypes
ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired, // children debe ser un nodo de React y es obligatorio
};

export {ShoppingCartProvider , ShoppingCartContext}