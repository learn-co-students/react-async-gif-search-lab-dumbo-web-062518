import React, { Component } from 'react';

export default class GifSearch extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({input: event.target.value})
  }

  handleSubmit(e){
    console.log("state input", this.state.input)
    e.preventDefault()
    this.props.formSubmission(this.state.input)

  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
        <input type="text" name="search" value={this.state.input} onChange={this.handleChange} placeholder="enter a search term"/>
        <input type="submit"/>
        </form>
      </div>
    );
  }
}
