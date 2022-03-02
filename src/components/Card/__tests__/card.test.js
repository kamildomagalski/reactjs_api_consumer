import { render, cleanup } from '../../../utils/test-utils';
import Card from '../Card';

afterEach(cleanup);

const mockedProps = {
  id: 634649,
  original_language: 'en',
  original_title: 'Spider-Man',
  overview: 'Lorem ipsum',
  poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  release_date: '2021-12-15',
  vote_average: 8.3,
  handleShowInfo: jest.fn(),
};

it('rednders component without crashing', () => {
  render(<Card {...mockedProps} />);
});

it('renders contents correctly', () => {
  const { getByTestId } = render(<Card {...mockedProps} />);
  const { original_language, original_title, poster_path, release_date, vote_average } = mockedProps;

  expect(getByTestId('image').src).toContain(`https://image.tmdb.org/t/p/w500/${poster_path}`);
  expect(getByTestId('title')).toHaveTextContent(`${original_title} (${original_language})`);
  expect(getByTestId('releaseDate')).toHaveTextContent(`Date of release: ${release_date}`);
  expect(getByTestId('voteAverage')).toHaveTextContent(`Average vote: ${vote_average}`);
});
