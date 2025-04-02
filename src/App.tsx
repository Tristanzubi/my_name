import Card from "./components/Card/Card"
import Header from "./components/Header/Header"
import "./App.css"

function App() {

  return (
    <>
      <Header />
      <main className="app">
        <Card name="Mario" num="1" imgSrc=""/>
        <Card name="Peach" num="2" imgSrc=""/>
        <Card name="Yoshi" num="3" imgSrc=""/>
      </main>
    </>
  )
}

// si je veux ajouter une image je doit ajouter la source ici 

export default App
