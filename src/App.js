import React, { useState } from "react"
import "./App.css"
import FilmInfo from "./components/FilmInfo"
import TableOfContent from "./components/Toc"

function App() {
  const [chosenFilm, setChosenFilm] = useState(" No Film Chosen")
  return (
    <div className="App">
      <div className="app_container">
        <TableOfContent chosenFilm={chosenFilm} setChosenFilm={setChosenFilm} />
        <FilmInfo chosenFilm={chosenFilm} />
      </div>
    </div>
  )
}

export default App
