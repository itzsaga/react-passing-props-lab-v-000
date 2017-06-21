import React from 'react'

import FruitBasket from './FruitBasket'

export default class App extends React.Component {
  constructor () {
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
    }
  }

  componentWillMount() {
    this.fetchFilters()
    this.fetchFruit()
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }))
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }))
  }

  handleChange = e => {
    this.setState({
      currentFilter: e
    })
  }

  handleFilterChange = e => {
    console.log('new filter: ', e.target.value);
    this.setState({ currentFilter: e.target.value });
  }

  render () {
    return (
      <FruitBasket fruit={this.state.fruit}
        filter={this.state.currentFilter}
        handleChange={this.handleChange}
      />
    )
  }
}
