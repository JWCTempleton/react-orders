import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { orders } from './orders';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      orders: orders,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render() {
    const filteredOrders = this.state.orders.filter(orders => {
      return orders.Service.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className="tc" >
        <h1 className='tc'>Order List</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList orders={filteredOrders} />
      </div>
    );
  }

}

export default App;
