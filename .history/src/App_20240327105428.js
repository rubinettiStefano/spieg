import Subject from "./Subject";


function App() 
{

  return (
    <>
      {/* props -> {name:"Java",min:1,max:10} */}
      <Subject name="Java" min={1} max={10} />
    </>
  );
}

export default App;
