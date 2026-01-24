import Tea from "./tea"

function App() {
  
  const username = "Khare"
  return (
    <>
    <Tea/> {/*  you can only return one element from a component */}
    <h1>Hello Vite + React!{username}</h1>
    <p>test para</p>
    </>
  )
}

export default App
