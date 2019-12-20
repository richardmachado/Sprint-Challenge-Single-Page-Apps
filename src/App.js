import React from "react";
import {Route} from "react-router-dom"
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'
import EpisodesList from './components/EpisodesList'

import Header from './components/Header';

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/episodes" component = {EpisodesList} /> 
    </main>
  );
}