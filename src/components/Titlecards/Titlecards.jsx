import React from 'react'
import {useRef,useEffect,useState} from 'react'
import './Titlecards.css'
import { Link } from 'react-router-dom'



const Titlecards = ({title,category}) => {
  const [apidata,setApidata]=useState([]);
  const cardsRef=useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTJhNjUyY2IzYjRhNTM5YTc1ODU3NTE2ODNjM2I5OCIsIm5iZiI6MTcxOTQ4NDg3NS45NzkyNjMsInN1YiI6IjY2N2Q0MDljMGIzNzY2ZmI5ZTA5MjMxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ECh6pjzLPZb0rcnTssu4nZZaFnWjCCbYH3K6kXYCmzg'
    }
  };
  
 
const handleWheel=(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApidata(response.results))
  .catch(err => console.error(err));


  cardsRef.current.addEventListener('wheel',handleWheel);
},[])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on MovieFlu"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card,index)=>{
          return <Link to={`/player/${card.id}`}className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
      
    </div>
  )
}

export default Titlecards
