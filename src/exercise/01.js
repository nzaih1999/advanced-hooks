// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 3}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const countReducer = (state, action) => {
    switch (action.type) {
      case 'ADD': {
        return {count: state.count + action.payload}
      }
      case 'DELETE': {
        return {count: state.count - action.payload}
      }

      default:
        return state
    }
  }
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () =>
    dispatch({
      type: 'ADD',
      payload: step,
    })

  const decrement = () => {
    dispatch({
      type: 'DELETE',
      payload: step,
    })
  }
  return (
    <div>
      {' '}
      <p className="">{state.count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

function App() {
  return <Counter />
}

export default App
