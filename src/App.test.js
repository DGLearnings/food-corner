import { render, screen } from '@testing-library/react';
import App from './App';


import HomePage from './pages/home-page/home.component';

test('renders Welcome message', () => {
  render(<App />);
  const welcomeMessage = screen.getByText("Welcome to Food Corner");
  expect(welcomeMessage).toBeInTheDocument();
});


test('renders Home Page Message', () => {
  render(<App><HomePage/></App>);
  const LinkElement = screen.getByText("Welcome to Food Corner");
  expect(LinkElement).toBeInTheDocument();
});

