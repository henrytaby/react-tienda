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
              <NavLink to="/lothes"
                className={({ isActive }) =>
                  ` ${
                    isActive ? activeStyle: undefined
                  }`
                }
              >
              Clothes
              </NavLink>
            </li>
            <li>
              <NavLink to="/electronics"
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
              <NavLink to="/furnitures"
                className={({ isActive }) =>
                  ` ${
                    isActive ? activeStyle: undefined
                  }`
                }
              >
                Furnitures
              </NavLink>
            </li>
            <li>
              <NavLink to="/toys"
                className={({ isActive }) =>
                  ` ${
                    isActive ? activeStyle: undefined
                  }`
                }
              >
                Toys
              </NavLink>
            </li>
            <li>
              <NavLink to="/others"
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
            <li>
              <NavLink to="/signout"
                className={({ isActive }) =>
                  ` ${
                    isActive ? activeStyle: undefined
                  }`
                }
              >
              Sign Out
              </NavLink>
            </li>
            <li><img src="https://static-00.iconduck.com/assets.00/whatsapp-icon-1020x1024-iykox85t.png" alt="Icon" className="h-6 cursor-pointer" /></li>
            <li className="flex items-center">
              <ShoppingBagIcon className="h-6 w-6 text-white"/>
              <div>{context.count}</div>
            </li>
            
          </ul>
        </nav>
    )
}

export default Navbar