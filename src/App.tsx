import Card from "./components/Card/Card"
import Header from "./components/Header/Header"
import "./App.css"

function App() {

  return (
    <>
      <Header />
      <main className="app">
        <Card name="Mario" num="1"/>
        <Card name="Peach" num="2"/>
        <Card name="Yoshi" num="3"/>
      </main>
    </>
  )
}

export default App
