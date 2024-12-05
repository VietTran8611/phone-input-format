import { useState } from 'react'
import { PhoneNumberInput } from './PhoneNumberInput'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PhoneNumberInput maxlength={10}/>
    </>
  )
}

export default App
