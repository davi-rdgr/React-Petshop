import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

// components:

import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'

// pages:

import PageHomepage from './pages/PageHomepage'
import PageProdutos from './pages/PageProdutos'

function App() {
  return (
    <>
      <PageHomepage />
{/*       <PageProdutos /> */}
    </>
  )
}

export default App