import { XMarkIcon } from '@heroicons/react/16/solid'
import './styles.css'

const ProductDetail = () => {
    return (
        <aside className="product-detail felx flex-col fixed right-0 border border-black rounded-lg bg-white ">
            <div className='flex justify-between items-center p-6'> 
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                <XMarkIcon className='h-6 w-6 text-blue-500 x-mark' />


                </div>

            </div>
        </aside>
    )
}
export default ProductDetail