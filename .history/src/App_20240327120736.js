import Stefano from "./Person";
import Subject from "./Subject";
import 'bootstrap/dist/css/bootstrap.css';

function App() 
{

  let people = [
    {

    },
    {

    }
  ];

  return (
    <>
      {/* props -> {name:"Java",min:1,max:10} */}
      {/* <Subject  {...java}/> */}
      <Person />
    </>
  );
}

export default App;
