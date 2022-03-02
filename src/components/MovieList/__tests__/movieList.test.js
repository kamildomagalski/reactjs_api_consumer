import { render, cleanup, fireEvent } from '../../../utils/test-utils';
import MovieList from '../MovieList';

afterEach(cleanup);

const mockedProps = {
  movies: [
    {
      id: 634649,
      original_language: 'en',
      original_title: 'Spider-Man',
      overview: 'Lorem ipsum',
      poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      release_date: '2021-12-15',
      vote_average: 8.3,
      handleShowInfo: jest.fn(),
    },
    {
      id: 111111,
      original_language: 'pl',
      original_title: 'Spider',
      overview: 'Lorem ipsum',
      poster_path: '/1g0dhYtq4ir.jpg',
      release_date: '2050-12-22',
      vote_average: 10.0,
      handleShowInfo: jest.fn(),
    },
  ],
  setMovies: jest.fn(),
};

it('rednders component without crashing', () => {
  render(<MovieList {...mockedProps} />);
});

it('renders button for getting movies when the app starts', () => {
  const { getByText } = render(<MovieList movies={[]} setMovies={jest.fn()} />);
  expect(getByText(/get random movies/i)).toBeInTheDocument();
});

it('display loading indicator when waiting for fetching data', () => {
  const { getByText, getByTestId } = render(<MovieList movies={[]} setMovies={jest.fn()} />);
  const button = getByTestId('button');
  fireEvent.click(button);
  expect(getByText(/loading.../i)).toBeInTheDocument();
});
