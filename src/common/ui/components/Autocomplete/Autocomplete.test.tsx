import { render, screen } from "@testing-library/react";
import PAutocomplete from "./Autocomplete";

const optionsMocked = ["option1", "option2"];

describe("Autocomplete Component", () => {
  it("should render Autocomplete Component with label", () => {
    const autocompleteComponent = render(
      <PAutocomplete
        label="AutocompleteComponentLabel"
        options={optionsMocked}
      />
    );

    const label = screen.getAllByText(/AutocompleteComponentLabel/i);

    expect(autocompleteComponent).toBeTruthy();
    expect(label).toHaveLength(2);
  });
});
