import React, { Component } from 'react'; // this pulls the Component property and saves it to a variable name Component

// first declare a new class with the name SearchBar
// then give it access to all of the functionality that React.Component has
class SearchBar extends Component {
  // the constructor method is how we initialize state
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  render() {
    // we have an 'input' element that we added an event handler to
    // the event hander triggers whenever the event occurs
    // onChange is a React property that we pass the event handler to
    // this.setState will update 'this.state'
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

// now any file that imports search_bar.js, it will get the SearchBar component
export default SearchBar;
