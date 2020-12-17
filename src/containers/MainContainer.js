import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    filter: 'All',
    portfolio: [],
    sort: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then( res => res.json() )
    .then( stocks => this.setState({stocks}))
  }

  filter = (e) => {
    this.setState({ filter: e.target.value })
  }

  trade = (stock) => {
    if (this.state.portfolio.includes(stock)) {
      this.setState({ portfolio: this.state.portfolio.filter( currentStock => currentStock.id !== stock.id )})
    } else {
      this.setState({ portfolio: [...this.state.portfolio, stock] })
    }
  }

  changeSort = (e) => {
    this.setState({ sort: e.target.value })
  }

  render() {
    return (
      <div>
        <SearchBar changeSort={this.changeSort} handleFilter={this.filter} sort={this.state.sort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer 
                sort={this.state.sort}
                stocks={this.state.filter === "All" ? this.state.stocks : this.state.stocks.filter( stock => stock.type === this.state.filter )}
                purchase={this.trade}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                sort={this.state.sort}
                stocks={this.state.portfolio} 
                sell={this.trade}
              />
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
