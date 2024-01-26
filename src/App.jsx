import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// components:

import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'

// pages:

import PageHomepage from './pages/PageHomepage'

function App() {
  return (
    <PageHomepage />
  )
}

export default App