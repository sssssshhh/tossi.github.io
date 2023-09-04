import Router from "next/router";

export default function Home({results}) {
  console.log(results);
  const onClick = (id, name) => {
    Router.push(`/movie/${id}/${name}`)
  }
  return (
    <div className='container'>
      <Header title='now playing movies' />
      {results?.map(movie => (
        <div onClick={() => onClick(movie.id, movie.original_title)} key={movie.id} className='movie'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='img'></img>
          <h4>{movie.original_title}</h4>
        </div>
      ))}

    <style jsx>{`
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 20px;
      gap: 20px;
    }
    .movie {
      cursor: pointer;
    }
    .movie img {
      max-width: 100%;
      border-radius: 12px;
      transition: transform 0.2s ease-in-out;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
    .movie:hover img {
      transform: scale(1.05) translateY(-10px);
    }
    .movie h4 {
      font-size: 18px;
      text-align: center;
    }
    `}</style>
    </div>
  )
}

export async function getServerSideProps(){
  const { results } = await (await fetch('http://localhost:3000/api/movies')).json();

  return {
    props: { 
      results
    }
  }
}
