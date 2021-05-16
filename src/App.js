import React, { Component } from 'react';
import './App.css';
import TodoTemplate from './Components/TodoTemplate';
import SideBar from './Components/SideBar';
import PostForm from './Components/PostForm';
import Palette from './Components/Palette';
import TodoItemList from './Components/TodoItemList';
import SearchForm from './Components/SearchForm';

const colors = ['#F5CEC7', '#E89897', '#FFC98B', '#FFB284', '#C7C19D'];

class App extends Component {
  id = 1;

  state = {
    input: '',
    todos: [],
    color: '#F5CEC7'
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
            <PostForm
              color={color}
              value={input}
              // onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreate={handleCreate} />
          } />

        <TodoTemplate search={<SearchForm />}>
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} onToggleBookmark={handleBookmark} />
        </TodoTemplate>
      </div >
    );
  }
}


export default App;
