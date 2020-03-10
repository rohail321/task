import React, { Component } from "react";
import Todos from "./component/Todos";
import Header from "./component/layout/header";
import AddTodo from "./component/AddTodo";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./component/pages/About";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => {
        console.log(res);
        this.setState({ todos: res.data });
      });
  }

  markComplete = id => {
    this.setState({
      todo: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => {
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
      });
  };

  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        id: uuidv4(),
        title,
        completed: false
      })
      .then(res => {
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };
  render() {
    console.log(this.state.todos);

    return (
      <Router>
        <div className='App'>
          <div className='container'></div>
          <Header />
          <Route
            path='/'
            render={() => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
            exact
          />
          <Route path='/about' component={About} exact />
        </div>
      </Router>
    );
  }
}

export default App;
