import React, { Component } from "react";
import Searchbar from "../SearchBar/Searchbar";
import axios from "axios";
import SearchedItems from "../SearchedItems/SearchedItems";
class App extends Component {
  state = { data: [] };
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID msCcVC11MSDH8EhAwPRXFau6bBrcY9-y7IrVkLFj3EQ",
      },
    });
    this.setState({ data: response.data.results });
    console.log(this.state.data);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
        <SearchedItems data={this.state.data} />
      </div>
    );
  }
}

export default App;
