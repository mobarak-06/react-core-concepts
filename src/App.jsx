import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import DoSomething from './DoSomething'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
  
 
  return (
    <>
      <h1>React core concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <Todo></Todo>
      <DoSomething></DoSomething>
      
      <button onClick={() =>handleClick4(5)}>click me</button>
      <button onClick={() => handleClick5(5)}>add ten</button>
       
    </>
  )
}

export default App
