import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const PAutocomplete = ({ options, label, props, onChange }: any) => {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={options}
      renderInput={(params) => <TextField {...params} label={label} />}
      onChange={onChange}
      {...props}
    />
  );
};

export default PAutocomplete;
