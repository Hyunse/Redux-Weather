import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    
    this.state = { term: '' };

    // Binding This
    this.onInputChange = this.onInputChange.bind(this);
  }

  // Input Change
  onInputChange(event) {
    this.setState({ term: event.target.value});
  }

  onFormSubmit(event) {
    // Don't submit Form to Backend
    event.preventDefault();
    
    
  }

  // Render
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          // onChange={ (event) => this.onInputChange(event)}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}