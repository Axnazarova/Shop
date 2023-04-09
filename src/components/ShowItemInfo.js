import './ShowItemInfo.css'

export default function ShowItemInfo({ item, onAdd, onShowItemInfo }) {
    return (

        <div className="full-item">

            <div>
                <p className='close' onClick={() => { onShowItemInfo() }}>X</p>
                <img src={item.image} />
                <div className='info'>
                    <div>
                        <h5>{item.title}</h5>
                        <b>{item.price}$</b>
                        <p>{item.description}</p>
                    </div>
                </div>
                <div className='add-to-card' onClick={() => onAdd(item)}>+</div>
            </div>
        </div>
    )


}


