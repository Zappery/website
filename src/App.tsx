// import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
// import Header from './components/Header'
import Home from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <main>
          <Home />
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
