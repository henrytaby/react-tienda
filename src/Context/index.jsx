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
    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({})
    // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart - Order
    const [order, setOrder] = useState([])

    const value = useMemo(() => ({
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder
    }), [
        count,
        isProductDetailOpen,
        productToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        order
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