import './App.css'
import { Header } from "./components/Header/Header"
import { BookList } from "./components/BookList/BookList"
import { Footer } from "./components/Footer/Footer"
function App() {
  

  return (
    <>
    <Header title='The Book Shop'/>
    <BookList/>
    <Footer/>
    </>
  )
}

export default App
