import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  
  // Validar si el índice es 'last' y calcular el índice correcto
  if(index === 'last') index = context.order?.length -1

  const renderView = ()=> {   
    index = Number(index);
    if (isNaN(index) || index < 0 || index >= context.order?.length) {
      return(
        <p className='text-center text-red-500'>Order not found.</p>
      )
    }

    const order = context.order[index];
    if (!order?.products || order.products.length === 0) {
      return (
        <p className='text-center text-red-500'>No products in this order.</p>
      )
    }

    return (
      context.order?.[index].products.map(product => (
        <OrderCard
          key={product.id}
          id={product.id}
          title={product.title}
          imageUrl={product.image}
          price={product.price}
        />
      ))
    )

  }

  return (


    <Layout>
      
      <div className='flex items-center justify-center w-120 relative mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
        <ChevronLeftIcon className='h-6 w-6 text-blue-500 x-mark cursor-pointer' />
        </Link>
        <h1>My Order</h1>
      </div>

      <div className='flex flex-col w-120'>
        {renderView()}
      </div>
    </Layout>
  )
}

export default MyOrder