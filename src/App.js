import React, { Component } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import SideBar from './components/SideBar';
import Form from './components/Form';
import Palette from './components/Palette';
import TodoItemList from './components/TodoItemList';

const colors = ['#ffffff', '#FFE2F5', '#ADFF85', '#FFBE74', '#CBF4FF'];

class App extends Component {
  id = 1;

  state = {
    input: '',
    todos: [],
    color: '#ffffff'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        bookmark: false,
        color
      })
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    })
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }

  handleBookmark = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      bookmark: !selected.bookmark
    };

    this.setState({
      todos: nextTodos
    })
  }


  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor,
      handleBookmark
    } = this;


    return (
      <div className="App">
        <SideBar
          palette={<Palette colors={colors} selected={color} onSelect={handleSelectColor} />}
          form={
            <Form
              color={color}
              value={input}
              // onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreate={handleCreate} />
          } />

        <TodoTemplate>
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} onToggleBookmark={handleBookmark} />
        </TodoTemplate>
      </div >
    );
  }
}


export default App;
