import React, { Component } from "react";
import Context from "../../Context";
import "./List.css";

class List extends Component {
  static contextType = Context;
  render() {
    const list = this.context.list;
    return (
      <div className="list">
        <h1>My List</h1>
        <div className="list-container">
          {list.map((list, i) => (
            <div className="gratitude-list" key={list.i}>
              <h3>{list.title}</h3>
              <p>{list.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default List;
