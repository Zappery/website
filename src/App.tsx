// import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  )
}

export default App
