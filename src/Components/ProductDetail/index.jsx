import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    
    return (
        <aside 
        className={`${context.isProductDetailOpen ? 'flex':'hidden'} product-detail felx flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between items-center p-6'> 
                <h2 className='font-medium text-xl'>Detail</h2>

                <button className='cursor-pointer'
                onClick={()=> context.closeProductDetail()}>
                    <XMarkIcon className='h-6 w-6 text-blue-500 x-mark' />
                </button>

            </div>
            {(context.isProductDetailOpen) && 
                <figure className='px-6'>
                    <img className='w-full h-full rounded-lg' 
                    src={context.productToShow.data.image} 
                    alt={context.productToShow.data.title} />
                </figure>
            }
            {(context.isProductDetailOpen) && 
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>{context.productToShow.data.price}</span>
                <span className='font-medium text-md'>{context.productToShow.data.title}</span>
                <span className='font-light text-sm'>{context.productToShow.data.description}</span>
            </p>
            }
        </aside>
    )
}
export default ProductDetail