import { useEffect, useState } from "react";
import Person from "./Person";
import Subject from "./Subject";
import 'bootstrap/dist/css/bootstrap.css';

function App() 
{

  let [people,setPeople] =useState([
    {
      id:1,
      name:"Stefano",
      surname:"Rubinetti",
      age:28
    },
    {
      id:2,
      name:"Viktoriya",
      surname:"Shnurovska",
      age:23
    }
  ]);

  useEffect(
    function()
    {
    },
    []
  );

  function changeAge(id,newAge)
  {
    let clone = [...people];
    let pos = clone.findIndex(p=>p.id==id);
    clone[pos].age = newAge;
    setPeople(clone);
  }


  return (
    <>
      {people.map(person=><Person {...person} changeAge={changeAge}/>)}
    </>
  );
}

export default App;
