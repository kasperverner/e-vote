import { useEffect } from "react"

function App() {
  useEffect(() => {
    async function fetchHello() {
      const response = await fetch('/api/hello')
      const data = await response.text()
      console.log(data)
    }

    fetchHello();
  }, [])

  return (
    <>
      <h1>Hello, World!</h1>
    </>
  )
}

export default App
