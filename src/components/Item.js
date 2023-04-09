// import './Item.css'

// export default function Item({ item, onAdd, onShowItemInfo }) {
//     return (
//         <div className="item" key={item.id}>
//             <img src={item.image} onClick={() => { onShowItemInfo(item) }} />
//             <div className='info'>
//                 <div>
//                     <h5>{item.title}</h5>
//                     <b>{item.price}$</b>
//                 </div>
//             </div>

//             <div className='add-to-card' onClick={() => onAdd(item)}>+</div>

//         </div>
//     )
// }

import './Item.css'

export default function Item({ item, onAdd, onShowItemInfo }) {

    return (
        <div className="item" key={item.id}>
            <img src={item.image} onClick={() => { onShowItemInfo(item) }} />
            <div className='info'>
                <div>
                    <h5>{item.title}</h5>
                    <b>{item.price}$</b>
                </div>
            </div>
            <div className='add-to-card' onClick={() => onAdd(item)}>+</div>
        </div>
    )
}

