import React, { Component } from "react";
import PropTypes from "prop-types";
import Todoitems from "./Todoitems";

export class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <Todoitems
        key={todo.id}
        todos={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}
//proptype
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
