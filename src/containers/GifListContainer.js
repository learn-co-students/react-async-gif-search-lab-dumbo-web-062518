import React, { Component } from 'react';
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

// It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.

export default class GifListContainer extends Component {
  state = {
    gifs: []
  }

  formSubmission = (searchTerm) => {
     fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
     .then(res => res.json())
     .then(json => json.data)
     .then(data => data.map(item => item.images.original.url).slice(0, 3))
     .then(gifs => this.setState({gifs}))
  }

  render() {
    // console.log("this.state", this.state)
    return (
      <div>
      <GifSearch formSubmission={this.formSubmission}/>
      <GifList gifs={this.state.gifs}/>
      </div>
    );
  }
}
