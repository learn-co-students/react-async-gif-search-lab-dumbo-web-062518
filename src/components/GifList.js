import React,  { Component } from 'react'

// import Gif from './Gif'

export default class GifList extends Component {
  render() {
    return (
    <ul>
      { this.props.gifs.map(gif => <li key={gif.slug}><img src={`${gif.images.downsized.url}`} alt={`${gif.slug}`} /></li> )}
      { console.log("giflist", this.props.gifs) }
    </ul>
    )
  }
}
