import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { useRef } from 'react'

const TitleCards = ({ title, category }) => {

    const [apiData, setApiData] = useState([]);


    const cardsRef = useRef();
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjM1MDFhMTQ4MGU0NjY4M2QyMzA3ZTc5YWJlNTBjNiIsIm5iZiI6MTc0NzY5MTY5NC41MzYsInN1YiI6IjY4MmJhOGFlZGQ0ZmE0ZGM3ZjJmNzg0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ylpmsll6RiIpVvjmDfrL4kZnYvP-3TQuMOSedi88zio'
        }
    };

    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));
        cardsRef.current.addEventListener('wheel', handleWheel)
    }, [])

    return (
        <div className='title-cards'>
            <h2>{title ? title : "Popular on Netflix"}</h2>
            <div className="card-list" ref={cardsRef}>
                {apiData.map((card, index) => {
                    return <div className='card' key={index} >
                        <img src={'https://image.tmdb.org/t/p/w500' + card.backdrop_path} alt="" />
                        <p> {card.original_title}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TitleCards
