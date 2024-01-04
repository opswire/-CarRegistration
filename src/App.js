import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currenetItems: [],
      items: [
        {
          id: 1,
          title: 'BMW M5 F90',
          img: 'v5f90jpg.jpg',
          desc: 'Одно из лучших творений BMW.',
          category: 'Sport',
          price: '100000.00$',
          color_car: 'Цвет: Черный',
          number_car: 'Номер: a111cc 95rus'
        },
        {
          id: 2,
          title: 'Mersedes CLS 63 AMG',
          img: 'mersedesccls.jpg',
          desc: 'Стиль, элегантность, комфорт - CLS.',
          category: 'Sport',
          price: '150000.00$',
          color_car: 'Цвет: Серый',
          number_car: 'Номер: a123фф 95rus'
        },
        {
          id: 3,
          title: 'BMW 3 E36',
          img: 'BMWE36.jpg',
          desc: 'Легенда 90-х.',
          category: 'Legend',
          price: '1150000.00$',
          color_car: 'Цвет: Белый',
          number_car: 'Номер: a011еу 161rus'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currenetItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currenetItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all')
    {
      this.setState({currenetItems: this.state.items})
      return
    }
    this.setState({
      currenetItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item] })
  }
}
<script src="script.js"></script>

export default App;
