import React from 'react';

export default class GifSearch extends React.Component{

  state = {
    searchField: ''
  }

  fieldUpdate = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }

  handleClick = () => {
    this.props.setSearch(this.state.searchField)
  }



  render () {
    return (
      <div>
        <input onChange={this.fieldUpdate}/>
        <button onClick={this.handleClick}>Sup</button>
      </div>
    )
  }
}
