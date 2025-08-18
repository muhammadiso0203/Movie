import { memo } from 'react';
import Hero from './components/hero';
import Main from './components/main';
import { useMovie } from '../movie/services/useMovie';

const Movie = () => {
  const {getMovies} = useMovie()
  const {data} = getMovies()
  
  return (
    <div>
      <Hero/>
      <Main data={data?.results}/>
    </div>
  );
};

export default memo(Movie);