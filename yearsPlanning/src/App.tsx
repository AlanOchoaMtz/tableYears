import { useState } from 'react'
import { YearsTable } from './components/yearsTable';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <YearsTable></YearsTable>
    </>
  )
}

export default App
