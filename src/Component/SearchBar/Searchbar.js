import React, { Component } from "react";
import axios from "axios";
class Searchbar extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.ChangeHandler} />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
