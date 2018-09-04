import React,  { Component } from 'react'

import GifList from './GifList'
import GifSearch from './GifSearch'

export default class GifListContainer extends Component {
  state = {
    gifs: [],
    keywords: "happy"
  }

  componentDidMount() {
    this.fetchGifs()
    console.log("componentDidMount", this.state)
  }

  // componentDidUpdate() {
  //   this.fetchGifs()
  //   console.log("componentDidUpdate", this.state)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log(this.state.keywords === nextState.keywords)
  //   // if(this.state.gifs === nextState.gifs) {
  //   //   return false
  //   // }
  //   if(this.state.keywords === nextState.keywords) {
  //     return false
  //   }
  //   return true
  // }

  fetchGifs = () => {
    // http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.keywords}&api_key=dc6zaTOxFJmzC&rating=g`
    console.log("url", url)
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({gifs: resp.data.slice(0,3)}, () => console.log("fetchGifs", this.state))
      })
  }

  setSearchTerms = (keywords) => {
    this.setState({keywords: keywords}, () => {
      console.log("setSearchTerms", this.state.keywords, keywords)
      this.fetchGifs()
    })
  }

  render() {
    let gifList = console.log("render", "no gifs")
    // this.fetchGifs()
    if(this.state.gifs.length > 0) {
      console.log("has gifs", this.state.gifs)
      gifList = <GifList gifs={this.state.gifs} />
    }

    return (
      <div>
        <GifSearch setSearchTerms={this.setSearchTerms} />
        {gifList}
      </div>
    )
  }
}
