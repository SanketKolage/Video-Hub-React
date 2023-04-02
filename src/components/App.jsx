import React, {useState} from 'react'

function App() {
  setInterval(update, 1000)
  const t1 = new Date().toLocaleTimeString()

  const [time, setTime] = useState(t1)

  function update() {
    const t2 = new Date().toLocaleTimeString()
    setTime(t2)
  }

  return (
    <div className="container">
      <h1 className="heading"> {time}</h1>
    </div>
  )
}

export default App
