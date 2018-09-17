import React, { Component } from 'react';

export default class GifList extends Component {
  render() {
    return (
      <div>
        {this.props.gifs.map(gif => {
          console.log("this gif", gif)
          return (<div key={gif} ><img src={gif} alt=""/></div>)
        })}
      </div>
    );
  }
}
