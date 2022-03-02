import { render, cleanup } from '../../../utils/test-utils';
import Button from '../Button';

afterEach(cleanup);

const mockedProps = {
  onClick: jest.fn(),
  buttonText: 'Test button',
};
it('renders button componen', () => {
  render(<Button {...mockedProps} />);
});

it('have proper button text', () => {
  const { getByTestId } = render(<Button {...mockedProps} />);
  expect(getByTestId('button')).toHaveTextContent(mockedProps.buttonText);
});
