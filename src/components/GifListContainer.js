import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

export default class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifs: [],
      urlQuery: ''
    };
  }

  searchFor = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(data => this.setState({
        gifs: data.data
      })
    )
  }

  render() {
    // console.log(this.state.gifs)
    return (
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch searchFor={this.searchFor} />
      </div>
    )
  };

  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(data => this.setState({
          gifs: data.data
      }, () => console.log(data.data))
    )
  };

}
