import { render, screen } from '@testing-library/react';
import RecruiterPageFinal from './RecruiterPageFinal';

test('renders learn react link', () => {
  render(<RecruiterPageFinal />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
