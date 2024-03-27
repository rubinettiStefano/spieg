import Stefano from "./Person";
import Subject from "./Subject";
import 'bootstrap/dist/css/bootstrap.css';

function App() 
{

  let people = [
    {
      name:"Stefano",
      surname:"Rubinetti",
      age:28
    },
    {
      name:"Viktoriya",
      surname:"Shnurovska",
      age:23
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
