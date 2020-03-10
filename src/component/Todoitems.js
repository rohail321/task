import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todoitems extends Component {
  getStyle = () => {
    return {
      backgroundColor: "grey",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todos.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todos;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            onChange={this.props.markComplete.bind(this, id)}
          />
          {"  "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

Todoitems.propTypes = {
  todos: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  background: "red",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};
export default Todoitems;
