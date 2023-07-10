import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should render App Component', () => {
    const appComponent = render(<App />);

    expect(appComponent).toBeTruthy();
  });
});
