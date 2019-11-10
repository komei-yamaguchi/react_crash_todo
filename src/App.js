import React, { Component } from 'react'
import Todos from './components/Todos'
import './App.css'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'take out the trash'
      },
      {
        id: 2,
        title: 'Dinner with wife'
      },
      {
        id: 3,
        title: 'Meeting with boss'
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos />
      </div>
    )
  }
}

export default App
