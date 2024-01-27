import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Search from './components/Search/Search';
import Card from './components/Cards/card';

function App() {

  return (
    <>
      <Header></Header>
      <Search/>
      <Card/>
    </>
  )
}

export default App
