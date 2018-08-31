import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends Component {
  state = {
    term: '',
    gifs: []
  }

  componentDidMount() {
    this.fetchApi()
  }

  fetchApi = () => {
    const term = this.state.term
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then( resp => resp.json() )
    .then( this.handleData )
  }

  handleData = (hi) => {
    console.log(hi);
    this.setState({
      gifs: hi.data.slice(0,3)
    })
  }

  handleChange = (e) => {
    e.persist()
    this.setState({
      term: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.persist()
    e.preventDefault()
    this.fetchApi(this.state.term)
  }

  renderGifs = () => {
    return this.state.gifs.map( (gifObj, index) => <GifList key={index} gifUrl={gifObj.images.original.url} />)
  }

  render() {
    return (
      <div>
        <GifSearch term={this.state.term} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        {this.renderGifs()}
      </div>
    )
  }
}

export default GifListContainer;
