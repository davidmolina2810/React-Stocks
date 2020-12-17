import React, { Component } from 'react'

class Stock extends Component {

  render() {
    const { ticker, name, price } = this.props.stock
    return(
      <div>

        <div className="card" onClick={() => this.props.trade(this.props.stock)}>
          <div className="card-body">
            <h5 className="card-title">{
                name
              }</h5>
            <p className="card-text">
              {ticker}: {price}
              </p>
          </div>
        </div>


      </div>
    )
  }

};

export default Stock
