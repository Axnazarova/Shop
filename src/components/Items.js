import Item from "./Item"
import './Items.css'

export default function Items({ items, onAdd, onShowItemInfo }) {
    return (
        <main>

            {items && (items.map((item) => {
                return (
                    <Item onShowItemInfo={onShowItemInfo} key={item.id} item={item} onAdd={onAdd} />
                )
            }))}
        </main>
    )
}



