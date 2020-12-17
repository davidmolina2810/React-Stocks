import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let sortedStocks 
    if (this.props.sort === "Alphabetically") {
      sortedStocks = this.props.stocks.sort( (stock1, stock2) => stock1.name.localeCompare(stock2.name) )
    } else if (this.props.sort === "Price") {
      sortedStocks = this.props.stocks.sort( (stock1, stock2) => stock1.price - stock2.price )
    } else {
      sortedStocks = this.props.stocks
    }
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.stocks.map( stock => {
              return <Stock 
                trade={this.props.sell} 
                key={stock.id} 
                stock={stock} 
                />
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
