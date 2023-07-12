import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

interface optionInterface {
  label: string;
}

const PAutocomplete = ({
  options,
  label,
  props,
  onChange,
}: {
  options: optionInterface[];
  label?: string;
  props?: { [x: string]: unknown }[];
  onChange: (value: unknown) => void;
}) => {
  return (
    <Autocomplete
      options={options}
      renderInput={(params) => <TextField {...params} label={label} />}
      onChange={(_: React.SyntheticEvent, v: optionInterface | null) =>
        onChange(v)
      }
      {...props}
    />
  );
};

export default PAutocomplete;
