import './App.css';
import PAutocomplete from './common/ui/components/Autocomplete/Autocomplete';
import rationService from './ration/domain/services/rationServices';

function App() {
  const data = rationService.findRations();
  console.log({ data });
  const handleOnChange = (opt: unknown) => {
    console.log(opt);
  };

  return (
    <>
      <h1>I want to be a APP</h1>
      <PAutocomplete options={data} label="MyLabel" onChange={handleOnChange} />
    </>
  );
}

export default App;
