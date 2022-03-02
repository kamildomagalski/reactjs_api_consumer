import { useState, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import ViewLayout from './components/ViewLayout/ViewLayout';
import MovieList from './components/MovieList/MovieList';
import PageError from './components/PageError/PageError';

import { Movie } from './types/types';

import './app.scss';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const handleSetMovies = useCallback((value) => setMovies(value), [setMovies]);
  return (
    <ViewLayout>
      <Switch>
        <Route exact path={'/'}>
          <MovieList movies={movies} setMovies={handleSetMovies} />
        </Route>
        <Route exact path={'/:errorNumber'}>
          <PageError />
        </Route>
      </Switch>
    </ViewLayout>
  );
}

export default App;
