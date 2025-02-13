import { createContext, useState, useMemo, useEffect } from 'react'
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

    // Get products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)
    
    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)


    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await fetch("https://fakestoreapi.com/products");
              const data = await response.json();
              setItems(data);
            } catch (error) {
              console.error("Error al obtener los datos:", error);
            }
          };
        fetchData();
      }, []);
    
    
    const filteredItemsByTitle = (items, searchByTitle) =>{
      return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(()=>{
      if (searchByTitle) setFilteredItems(filteredItemsByTitle(items,searchByTitle))
    }, [items,searchByTitle]);

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
        setOrder,
        items,
        setItems,
        searchByTitle, 
        setSearchByTitle,
        filteredItems
    }), [
        count,
        isProductDetailOpen,
        productToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        order,
        items,
        searchByTitle,
        filteredItems
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