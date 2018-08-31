import React, { Component } from 'react';
import GifCard from './GifCard';

export default class GifList extends Component {

  gifCards = () => {
    return this.props.gifs.map(g => {
      return <li><GifCard gif={g} /></li>
    })
  }

  render() {
    console.log(this.props.gifs)
    return (
      <div>
        <ul>
          {this.gifCards()}
        </ul>
      </div>
    )
  }
}
