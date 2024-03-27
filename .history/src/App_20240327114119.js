import Subject from "./Subject";
import 'bootstrap/dist/css/bootstrap.css';

function App() 
{

  return (
    <>
      {/* props -> {name:"Java",min:1,max:10} */}
      <Subject name="Java" min={1} max={30} />
    </>
  );
}

export default App;
