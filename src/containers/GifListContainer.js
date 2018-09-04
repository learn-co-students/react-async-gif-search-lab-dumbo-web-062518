import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends React.Component{

  state = {
    search: 'cat',
    gifs: []
  }

  // componentDidMount(){
  //   fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
  //   .then(r => r.json())
  //   .then(list =>
  //     this.setState({
  //     gifs: [list.data[0], list.data[1], list.data[2]]
  //   }))
  // }

  componentDidUpdate(){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(r => r.json())
    .then(list =>
      this.setState({
      gifs: [list.data[0], list.data[1], list.data[2]]
    }))
  }

  setSearch = (search) => {
    this.setState({
      search
    })
  }

  render () {
    return (
      <div>
        <GifSearch gifs={this.state.gifs} setSearch={this.setSearch} />
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
