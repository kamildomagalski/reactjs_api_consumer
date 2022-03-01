import { Switch, Route } from 'react-router-dom';
import ViewLayout from './components/ViewLayout/ViewLayout';
import MovieList from './components/MovieList/MovieList';

import './app.scss';

function App() {
  return (
    <ViewLayout>
      <Switch>
        <Route exact path={'/'}>
          <MovieList />
        </Route>
      </Switch>
    </ViewLayout>
  );
}

export default App;
