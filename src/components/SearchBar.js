import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    alphabetical: null,
    price: null
  }

  render() {
    return (
      <div>

        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.props.sort === "Alphabetically"} onChange={this.props.changeSort}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.props.sort === "Price"} onChange={this.props.changeSort}/>
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={this.props.handleFilter}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>


      </div>
    );
  }
}


export default SearchBar;
