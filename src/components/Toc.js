import React, { useEffect, useState } from "react"
import axios from "axios"
import "./Toc.css"

function TableOfContent({ chosenFilm, setChosenFilm }) {
  const [films, setFilms] = useState([])
  const clickForViewFilm = (film) => {
    setChosenFilm(film)
  }

  const swapiApi = "https://swapi.dev/api/films"

  useEffect(() => {
    axios.get(swapiApi).then((res) => {
      setFilms(res.data.results)
    })
  }, [swapiApi])

  return (
    <div className="toc_container">
      {films.map((film, idx) => {
        return (
          <h4
            key={idx}
            className="title"
            onClick={() => {
              clickForViewFilm(film)
            }}
          >
            {film.title}
          </h4>
        )
      })}
    </div>
  )
}

export default TableOfContent
