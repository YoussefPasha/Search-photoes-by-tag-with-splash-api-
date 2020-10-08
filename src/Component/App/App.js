import React, { Component } from "react";
import Searchbar from "../SearchBar/Searchbar";
import axios from "axios";
class App extends Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID msCcVC11MSDH8EhAwPRXFau6bBrcY9-y7IrVkLFj3EQ",
      },
    });
    console.log(response.data.results);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
