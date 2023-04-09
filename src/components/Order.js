import './Order.css'
import { FaTrashAlt } from "react-icons/fa"
export default function Order({ item, onDelete }) {
    return (
        <div className='order'>
            <div className='order-content'>
                <img src={item.image} />
                <h5>{item.title}</h5>
                <p>{item.price}$</p>

            </div>

            <FaTrashAlt className='delete-icon' onClick={() => { onDelete(item.id) }} />
        </div>
    )
}
