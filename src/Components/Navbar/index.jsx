import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingBagIcon } from "@heroicons/react/16/solid"
import { ShoppingCartContext } from '../../Context'

const Navbar = () =>{
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'
    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-gray-800 text-white shadow-md">
          {/* Grupo Izquierdo */}
          <ul className="flex items-center gap-3">
            <li><img src="https://static-00.iconduck.com/assets.00/whatsapp-icon-1020x1024-iykox85t.png" alt="Logo" className="h-8" /></li>
            <li className="font-semibold text-lg">
              <NavLink to="/">
                Shopi
              </NavLink>
            </li>
            <li>
              <NavLink to="/"
                onClick={()=> context.setSearchByCategory()}
                className={({ isActive }) =>
                  ` ${
                    isActive ? activeStyle: undefined
                  }`
                }
              >
              All
              </NavLink>
            </li>
            <li>
              <NavLink to="/jewelery"
                onClick={()=> context.setSearchByCategory('Jewelery')}
                className={({ isActive }) =>
                  ` ${
                    isActive ? activeStyle: undefined
                  }`
                }
              >
              Jewelery
              </NavLink>
            </li>
            <li>
              <NavLink to="/electronics"
              onClick={()=> context.setSearchByCategory('electronics')}
                className={({ isActive }) =>
                  ` ${
                    isActive ? activeStyle: undefined
                  }`
                }
              >
                Electronics
              </NavLink>
            </li>
            <li>
              <NavLink to="/women"
              onClick={()=> context.setSearchByCategory('women')}
                className={({ isActive }) =>
                  ` ${
                    isActive ? activeStyle: undefined
                  }`
                }
              >
                women
              </NavLink>
            </li>
            <li>
              <NavLink to="/men"
              onClick={()=> context.setSearchByCategory("men's clothing")}
                className={({ isActive }) =>
                  ` ${
                    isActive ? activeStyle: undefined
                  }`
                }
              >
                Mens
              </NavLink>
            </li>
            <li>
              <NavLink to="/others"
              onClick={()=> context.setSearchByCategory('others')}
                className={({ isActive }) =>
                  ` ${
                    isActive ? activeStyle: undefined
                  }`
                }
              >
                Others
              </NavLink>
            </li>
          </ul>
          {/* Grupo Derecho */}
          <ul className="flex items-center gap-3">
            <li className="text-black/60">henry.taby@gamil.com</li>
            <li>
              <NavLink to="/my-orders"
                className={({ isActive }) =>
                  ` ${
                    isActive ? activeStyle: undefined
                  }`
                }
              >
              My Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-account"
                className={({ isActive }) =>
                  ` ${
                    isActive ? activeStyle: undefined
                  }`
                }
              >
              My Account
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/signout"
                className={({ isActive }) =>
                  ` ${
                    isActive ? activeStyle: undefined
                  }`
                }
              >
              Sign Out
              </NavLink>
            </li> */}
            <li className="flex items-center">
              <ShoppingBagIcon className="h-6 w-6 text-white"/>
              <div>{context.cartProducts.length}</div>
            </li>
            
          </ul>
        </nav>
    )
}

export default Navbar