import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";



import Order from './Order';
const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += 1)
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='summa'>Количество машин: {summa}</p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>Машин нет</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'>Учет автомобилей</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Полезные ссылки</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ?
                  showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}

