import { render } from '@testing-library/react';
import PButton from './button';

describe('Button Component', () => {
  it('should render Button Component', () => {
    const buttonComponent = render(<PButton>Label</PButton>);

    expect(buttonComponent).toBeTruthy();
  });
});
