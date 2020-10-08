import React, { Component } from "react";
import Searchbar from "../SearchBar/Searchbar";
class App extends Component {
  onSearchSubmit(term) {}
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;