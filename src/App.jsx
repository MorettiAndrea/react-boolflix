// imports

import { useState } from "react";
import axios from "axios";
import { SearchProductionsProvider } from "./context/bootflix-context";

// funzione

export default function App() {
  const [searchedWords, setSearchedWords] = useState("");


  const handleOnChange = (e) => {
    setSearchedWords(e.target.value);
  };

  

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  // struttura

  return (
    <SearchProductionsProvider>
    <div className="container ">
      
      <main>
        {movies.map((movie)=>(<ul key={movie.id}> 
        <li>Titolo{movie.title}</li>
        <li>Titolo originale{movie.originalTitle}</li>
        <li>Lingua{movie.language}</li>
        <li>rating{movie.rating}</li>
        </ul>))}
      </main>
    </div>
  </SearchProductionsProvider>);
}