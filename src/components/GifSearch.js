import React,  { Component } from 'react'

export default class GifSearch extends Component {
  state = {
    keywords: ""
  }

  handleChange = e => {
    this.setState({keywords: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.setSearchTerms(this.state.keywords)
    console.log("gifsearch", this.state.keywords)
    // console.log(e.target.search.value)
    this.setState({keywords: ""})
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="search" value={this.state.keywords} onChange={this.handleChange} />
      </form>
    </div>
    )
  }
}
