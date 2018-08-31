import React, { Component } from 'react';

export default class GifSearch extends Component {



  handleSearch = (e) => {
    this.props.searchFor(e.target.value)
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleSearch} name="query" />
      </div>
    )
  };

}
