import "./App.css";
import PAutocomplete from "./common/ui/components/Autocomplete/Autocomplete";

function App() {
  const handleOnChange = (opt: any) => {
    console.log(opt);
  };

  return (
    <>
      <h1>I want to be a APP</h1>
      <PAutocomplete
        options={[
          { label: "test1", value: "1", id: "myID1" },
          { label: "test2", value: "2", id: "myID2" },
        ]}
        label="MyLabel"
        onChange={handleOnChange}
      />
    </>
  );
}

export default App;
