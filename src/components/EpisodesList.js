  
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from 'axios';

export default function EpisodeList() {
    const [ episodes, setEpisodes ] = useState([]);

    useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
        .then((res) => {
        setEpisodes(res.data.results);
        console.log(res.data.results)
        
        })
    }, []);

    // console.log(episodes);
    return (

    <section className="character-list">
           <h2>Episodes List</h2>
                <Link className="main-buttons" to={"/"}>Home</Link>
                <Link className="main-buttons" to={"/characters"}>Characters</Link>
           {episodes.map(epi => 
            <div className="episodes-list" key={epi.id}>
                <li>Episode # {epi.id}</li>
               <li>Episode Name: {epi.name}</li>
               <li>Episode Air Date: {epi.air_date}</li>

            </div>
            )}     
    </section>
    );
}

