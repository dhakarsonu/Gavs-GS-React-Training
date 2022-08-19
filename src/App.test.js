import { render, screen } from '@testing-library/react';
import App from './App';
import store from './store';
import history from './history';

describe('App Page',() => {
  beforeEach(() => {
    render(<App store={store} history={history} />);
  })
 test("renders app header", () => {
  const startButton = screen.getByText(/Start/i);
  expect(startButton).toBeInTheDocument();
  const header = screen.findByTestId("header-element");
  expect(startButton).toBeInTheDocument();
 })
})
