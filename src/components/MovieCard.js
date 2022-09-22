import React from "react";

function MovieCard({
  title,
  posterSrc = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg",
  genres,
}) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}
// // Without Destructuring
// function MovieCard(props) {
//   return (
//     <div className="movie-card">
//       <img src={props.posterSrc} alt={props.title} />
//       <h2>{props.title}</h2>
//       <small>{props.genres.join(", ")}</small>
//     </div>
//   );
// }
// with destructuring
// function MovieCard ({title, posterSrc, genres}) {
//   return (
//    <div className="movie-card">
//      <img src={posterSrc} alt={title}/>
//      <h2>{title}</h2>
//      <small> {genres.join(",")}</small>

//    </div>
//   );
// }
// // destructuring nested elements
// function App() {
//  const socialLinks = {
//    github: "https://github.com/liza",
//    linkedin: "https://www.linkedin.com/in/liza/",
//  };

//  return (
//    <div>
//      <SocialMedia links={socialLinks} />
//    </div>
//  );
// }
// function SocialMedia ({socialLinks:{ github, linkedin }}) {
//  return (
//    <div >
//        <a href={github}>{github}</a>
//      <a href={linkedin}>{linkedin}</a>
//    </div>
//  )
// }

export default MovieCard;
