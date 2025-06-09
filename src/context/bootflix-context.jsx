import { createContext ,useContext , useState } from "react";

const SearchProductions = createContext()
 const apiUrl = "https://api.themoviedb.org/3";
  const api_key = import.meta.env.VITE_API_KEY;
  const language = "it-IT";

function SearchProductionsProvider ({childern}){
  const [movies, setMovies] = useState([])

const search = () =>{ const searchData = {
      api_key,
      language: language,
      query: searchedWords,
    }}
    
const dinamicQueryParams = new URLSearchParams(searchData).toString();

   

    axios.get(`${apiUrl}/search/movie?${dinamicQueryParams}`)
      .then((res) => {
        console.log(res.data.results);
        const researchResults = res.data.results.map(movie =>({
            id: movie.id,
            title:movie.id,
            originalTitle: movie.original_title,
            language: movie.original_language,
            rating: movie.vote_avarage,
        }));
        console.log(researchResults);

        setMovies(researchResults)
      })

    const searchedValue = {movies,search}




return ( <SearchContext.Provider value= {searchedValue}> {childern}</SearchContext.Provider>)}

const useSearchedProductions = () =>{return useContext(SearchProductions)}


export{SearchProductionsProvider,useSearchedProductions}