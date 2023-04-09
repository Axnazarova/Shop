import { useState } from 'react';
import { FaSortAmountDownAlt } from 'react-icons/fa';
import { FaSortAmountUpAlt } from 'react-icons/fa';
import './Categories.css';

export default function Categories({ chooseCategory, sortItemsAsc, sortItemsDesc }) {
    const [categories, setCategories] = useState([
        {
            key: 'all',
            name: 'Все',
        },
        {
            key: "men's clothing",
            name: 'Мужская Одежда',
        },
        {
            key: 'electronics',
            name: 'Электроника',
        },
        {
            key: 'jewelery',
            name: 'Украшения',
        },
        {
            key: "women's clothing",
            name: 'Женская одежда',
        },

    ]);

    return (
        <div className='categories'>


            {categories.map(category => (
                <div key={category.key} onClick={() => chooseCategory(category.key)}>
                    {category.name}
                </div>
            ))}



            <FaSortAmountDownAlt className="sort-icon" onClick={() => { sortItemsAsc() }} />
            <FaSortAmountUpAlt className="sort-icon" onClick={() => { sortItemsDesc() }} />
        </div>
    );
}
