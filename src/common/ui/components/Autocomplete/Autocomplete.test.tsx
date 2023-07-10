import { render, screen } from '@testing-library/react';
import PAutocomplete from './Autocomplete';

const optionsMocked = [
  { id: 'option1', value: 'option1', label: 'option1' },
  { id: 'option2', value: 'option2', label: 'option2' },
];

describe('Autocomplete Component', () => {
  it('should render Autocomplete Component with label', () => {
    const autocompleteComponent = render(
      <PAutocomplete
        label="AutocompleteComponentLabel"
        options={optionsMocked}
        onChange={() => {
          return true;
        }}
      />
    );

    const label = screen.getAllByText(/AutocompleteComponentLabel/i);

    expect(autocompleteComponent).toBeTruthy();
    expect(label).toHaveLength(2);
  });
});
