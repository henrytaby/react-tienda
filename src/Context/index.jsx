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
    
    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)

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

    const filteredItemsByCategory = (items, searchByCategory) =>{
      return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory ) => {
      if(searchType === 'BY_TITLE'){
        return filteredItemsByTitle(items,searchByTitle)
      }
      if(searchType === 'BY_CATEGORY'){
        return filteredItemsByCategory(items,searchByCategory)
      }
      if(searchType === 'BY_TITLE_AND_CATEGORY'){
        return filteredItemsByCategory(items,searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }
      if(!searchType){
        return items
      }

    }

    useEffect(()=>{
      if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items, searchByTitle, searchByCategory ))
      if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE',items, searchByTitle, searchByCategory ))
      if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY',items, searchByTitle, searchByCategory ))
      if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null,items, searchByTitle, searchByCategory ))
      
    }, [items,searchByTitle, searchByCategory]);

    // console.log('searchByTitle:----',searchByTitle)
    // console.log('searchByCategory:----',searchByCategory)
    // console.log('filteredItems:----',filteredItems)


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
        filteredItems,
        searchByCategory, 
        setSearchByCategory
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
        filteredItems,
        searchByCategory
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