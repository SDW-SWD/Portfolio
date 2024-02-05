import { useState } from 'react'
import './App.css'
import Content from './components/content'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
