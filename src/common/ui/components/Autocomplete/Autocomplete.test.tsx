import { render } from "@testing-library/react";
import PAutocomplete from "./Autocomplete";

const optionsMocked = ["option1", "option2"];

describe("Autocomplete Component", () => {
  it("should render Autocomplete Component", () => {
    const autocompleteComponent = render(
      <PAutocomplete options={optionsMocked}>Label</PAutocomplete>
    );

    expect(autocompleteComponent).toBeTruthy();
  });
});
