import React, { Component } from 'react';

export default class GifCard extends Component {

  render() {
    console.log(this.props.gif)
    return (

        <img src={this.props.gif.images.original.url} alt=""/>

    )
  }
}
