import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import '../containers/App.css';


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
    const { orders, searchfield } = this.state;
    const filteredOrders = orders.filter(users => {
      return users.name.toLowerCase().includes(searchfield.toLowerCase());
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
