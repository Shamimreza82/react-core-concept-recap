import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from '../Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Post></Post>
      <hr />
      <h3>Reace core Conept</h3>
      <ol>
        <li>Component</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>state</li>
        <li>Data Lode</li>
      </ol>
    </>
  )
}

export default App
