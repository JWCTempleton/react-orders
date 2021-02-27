import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      orders: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      return response.json()
    })
      .then(users => {
        this.setState({ orders: users })
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render() {
    const filteredOrders = this.state.orders.filter(users => {
      return users.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className="tc" >
        <h1 className='tc f1 order-header'>Order List</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList orders={filteredOrders} />
        </Scroll>
      </div>
    );
  }

}

export default App;
