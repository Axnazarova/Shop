import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Link from 'react'
import './Header.css'
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order.js";


export default function Header({ orders, onDelete }) {
    let [cardOpen, setCardOpen] = useState(false)

    function showOrders(orders) {
        let summ = 0;
        orders.forEach(el => summ += Number(el.price))
        return (
            <div className='bag'>
                {orders.map((el) => (< Order onDelete={onDelete} key={el.id} item={el} />))}
                <p className='summ'>Сумма: {summ}$</p>

            </div>
        )
    }

    return (

        <header>
            <div className='navigation flex'>
                <span className='logo'>Shopping</span>
                <nav className='nav-menu'>
                    <ul className='nav'>
                        <li><a href="mailto:mail@itacademy.az">Напишите нам</a></li>
                        <li className='items-in-bag'>Товаров в корзине:  {orders.length}</li>
                    </ul>
                    <FaShoppingCart onClick={() => { setCardOpen(!cardOpen) }} className={`${cardOpen ? 'shop-card-button active' : 'shop-card-button'}`} />

                </nav>

                {
                    cardOpen && (
                        <div className='shop-cart'>

                            {orders.length > 0 ? showOrders(orders) : <div className='empty'><h2>Корзина пуста</h2></div>}

                        </div>
                    )
                }

            </div>



            <div className='presentation'></div>
        </header>


    )
}