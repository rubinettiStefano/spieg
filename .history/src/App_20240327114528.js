import Subject from "./Subject";
import 'bootstrap/dist/css/bootstrap.css';

function App() 
{

  let java = {name:"Java", min:1, max:30};

  return (
    <>
      {/* props -> {name:"Java",min:1,max:10} */}
      <Subject  sub={java}/>
    </>
  );
}

export default App;
