import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Search from './components/Search/Search';
import Card from './components/Cards/Card';
import foods from './utils/food';
function App() {

  return (
    <>
      <Header></Header>
      <Search />
      <Card foods={foods.slice(0, 4)} />
      <Search title={'search specialised recipe'}/>
      <Card foods={foods.slice(4, 7)} />
    </>
  )
}

export default App
