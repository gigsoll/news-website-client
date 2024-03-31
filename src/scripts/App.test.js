import { render, screen } from '@testing-library/react';
import Main from './Main.js'

test('renders learn react link', () => {
  render(<Main />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
