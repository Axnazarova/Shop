import { useState, useEffect } from 'react';
import Header from './components/Header';
import Items from './components/Items';
import Footer from './components/Footer';
import './App.css';
import Categories from './components/Categories';
import ShowItemInfo from './components/ShowItemInfo';



function App() {

  const [items, setItems] = useState('')
  let [orders, setOrders] = useState([])
  let [currentItems, setCurrentItems] = useState([])
  let [showItemInfo, setShowItemInfo] = useState(false)
  let [showItem, setShowItem] = useState()

  function addToOrder(item) {
    let isArray;

    orders.forEach((el) => {
      if (el.id === item.id) {
        isArray = true;
      }
    })
    if (!isArray) {
      setOrders([...orders, item])
    }

    console.log(orders)
  }


  function deleteOrders(id) {
    let filtered = orders.filter(el => el.id !== id)
    setOrders(filtered)
    console.log(id)
  }

  function chooseCategory(category) {
    if (category === 'all') {
      setCurrentItems(items)
      return
    }
    let filtered = items.filter(el => el.category === category)
    setCurrentItems(filtered)
    console.log(category)

  }

  function onShowItemInfo(item) {
    setShowItemInfo(!showItemInfo)
    setShowItem(item)
  }

  function sortItemsAsc() {
    let sorted = currentItems.sort((el, el1) => el.price - el1.price);
    setCurrentItems([...sorted]);
  }


  function sortItemsDesc() {
    let sorted = currentItems.sort((el, el1) => el1.price - el.price);
    setCurrentItems([...sorted]);
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(info => {
        console.log(info)
        setItems(info)
        setCurrentItems(info)
      })
  }, [])



  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrders} />

      <Categories chooseCategory={chooseCategory} sortItemsAsc={sortItemsAsc} sortItemsDesc={sortItemsDesc} />
      <Items onShowItemInfo={onShowItemInfo} items={currentItems} onAdd={addToOrder} />

      {showItemInfo && <ShowItemInfo item={showItem} onAdd={addToOrder} onShowItemInfo={onShowItemInfo} />}
      <Footer />
    </div>
  );
}

export default App;
