import { render, cleanup } from '../../../utils/test-utils';
import Header from '../Header';

afterEach(cleanup);

it('rednders component without crashing', () => {
  render(<Header />);
});

it('renders title correctly', () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId('title')).toHaveTextContent(/the movie database/i);
});

it('renders logo correctly', () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId('logo')).toBeInTheDocument();
});
