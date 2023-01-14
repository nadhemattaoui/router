import { useEffect, useRef, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';

import React from 'react'
import Show from './Show'
import Star from './Star';
import './App.css'
import { NavLink, Routes, Route } from 'react-router-dom';
import Description from './Description';
function App() {

  const [list, setList] = useState([
    { name: "harry potter", rate: "2.5", imgsr: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTaGGnLFf3A9kBUzT20RLhGhPCfzUtKhE-MrcEOj5aH5bL1vnTQBqxrsJnnbOc7puswYI&usqp=CAU", desc: "film 1" },
    { name: "Pocker face", rate: "4", imgsr: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHKhCIO1thJahnwfyeHfYrvVrUlP7Ft_5vJQ&usqp=CAU", desc: "film 2" },
    { name: "Time out", rate: "4.5", imgsr: "https://fr.web.img4.acsta.net/medias/nmedia/18/85/59/68/19816803.jpg", desc: "film 3" }
  ])

  const [filtredList, setFilter] = useState(list)

  useEffect(() => {
    setFilter(list)
  }, [list])

  const search = useRef()

  const filtrer = () => {
    setFilter(list.filter(e => e.name.toUpperCase().includes(search.current.value.toUpperCase())))

  }
  const [rating, setRating] = useState()

  const onStarClick = (x) => {
    setFilter(list.filter(e => e.rate >= x))
  }

  return (
    <div className='App'>
      <div className='barre'>
        <ul className='nav'>

          <li> Home </li>
          <li>Movies</li>

          <li><div className='navbar'>
            <input type={"search"} placeholder="enter your search" ref={search} onChange={filtrer}></input>

            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rating}
              onStarClick={onStarClick}

            />

          </div></li>
        </ul>
      </div>


      <Routes>
        <Route path={'/'} element={<>
          <div className='movieList'>

            {filtredList.map((e, index) =>
              <NavLink to={index.toString()} >
                <p>

                  <img className="imgstyle" src={e.imgsr} /><br />

                  <div>
                    {e.name}<br />
                    <Star rate={e.rate} ></Star>
                  </div>

                </p>
              </NavLink>)
            }
          </div>
          <Show list={list} setList={setList}></Show>
        </>}></Route>


        <Route path={'/:id'} element={<Description movies={list}></Description>}></Route>
      </Routes>
    </div>
  )
}

export default App
