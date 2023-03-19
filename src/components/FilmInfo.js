import React, { useState, useEffect } from "react"
import "./FilmInfo.css"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

function FilmInfo({ chosenFilm }) {
  const [isLiked, setIsLiked] = useState(false)
  const [filmLiked, setFilmLiked] = useState(
    localStorage.getItem("filmLiked")
      ? JSON.parse(localStorage.getItem("filmLiked"))
      : []
  )

  const handleLike = () => {
    if (isLiked) {
      const newFilmLiked = filmLiked.filter(
        (film) => film.title !== chosenFilm.title
      )
      setFilmLiked(newFilmLiked)
      localStorage.setItem("filmLiked", JSON.stringify(newFilmLiked))
    } else {
      setFilmLiked([...filmLiked, chosenFilm])
      localStorage.setItem(
        "filmLiked",
        JSON.stringify([...filmLiked, chosenFilm])
      )
    }
    setIsLiked(!isLiked)
  }

  useEffect(() => {
    // check if the film is liked or not
    const isLiked = filmLiked.some((film) => film.title === chosenFilm.title)
    setIsLiked(isLiked)
  }, [chosenFilm, filmLiked])

  return (
    <div className="filmInfo_container">
      {chosenFilm.title ? (
        <div className="filmInfo_content" id={"film_num_"+chosenFilm.episode_id} >
          <div className="headline">
            <h1>{chosenFilm.title}</h1>
            {isLiked ? (
              <AiFillHeart
                className="heart"
                size={30}
                onClick={() => handleLike(chosenFilm)}
              />
            ) : (
              <AiOutlineHeart
                className="heart"
                size={30}
                onClick={() => handleLike(chosenFilm)}
              />
            )}
          </div>
          <p>{chosenFilm.opening_crawl}</p>
        </div>
      ) : (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {chosenFilm}
        </h1>
      )}
    </div>
    
  )

}

export default FilmInfo
