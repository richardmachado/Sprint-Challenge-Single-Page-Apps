  
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from 'axios';

export default function EpisodeList() {
    const [ episodes, setEpisodes ] = useState([]);

    useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
        .then((res) => {
        setEpisodes(res.data.results);
        console.log(res.data.results)
        
        })
    }, []);

   
    return (

    <section className="character-list">
           <h2>Locations List</h2>
                <Link className="main-buttons" to={"/"}>Home</Link>
                <Link className="main-buttons" to={"/characters"}>Characters</Link>
                <Link className="main-buttons" to={"/episodes"}>Episodes</Link>
           {episodes.map(epi => 
            <div className="episodes-list" key={epi.id}>
                
               <li>Location: {epi.name}</li>
               <li>Location Type: {epi.type}</li>
               <li>Dimension: {epi.dimension}</li> 


            </div>
            )}     
    </section>
    );
}

