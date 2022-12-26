import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PizzaList } from './components/PizzaList'
import { Header } from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <PizzaList />
    </div>
  )
}

export default App
