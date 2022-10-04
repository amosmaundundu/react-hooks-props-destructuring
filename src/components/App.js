import React from "react";
import MovieCard from "./MovieCard";
import SocialMedia from "./SocialMedia";

function App() {
  const title = "Mad Max";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];
 
 


  return (
    <div className="App">
       <MovieCard title={title} genres={genresArr} />
       <SocialMedia />
    </div>
  );
}





export default App;
