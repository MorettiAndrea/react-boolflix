import { useState } from "react";
import axios from "axios";

export default function App() {
  const [searchedWords, setSearchedWords] = useState("");

  const handleOnChange = (e) => {
    setSearchedWords(e.target.value);
  };

  const apiUrl = "https://api.themoviedb.org/3";
  const api_key = "4992bfb8f371e703b4a8368682152bd9";
  const language = "it-IT";

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const searchData = {
      api_key,
      language: language,
      query: searchedWords,
    };

    const dinamicQueryParams = new URLSearchParams(searchData).toString();
   

    axios.get(`${apiUrl}/search/movie?${dinamicQueryParams}`)
      .then((res) => {
        console.log(res.data.results);
        const researchResults = res.data.results.map(movie =>({
            id: movie.id,
            title:movie.id,
            originalTitle: movie.original_title,
            rating: movie.vote_avarage,
        }));
        console.log(researchResults);
      })
     
  };

  return (
    <div className="container ">
      <header>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            onChange={handleOnChange}
            value={searchedWords}
          />
          <button className="btn btn-primary ms-1">Cerca</button>
        </form>
      </header>
    </div>
  );
}