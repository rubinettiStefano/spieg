import { useEffect, useState } from "react";
import Person from "./Person";
import Subject from "./Subject";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

function App() 
{

  let [people,setPeople] =useState([]);

  useEffect(
    function()
    {
      axios.get("localhost:4000/people").then((response)=>setPeople(response.data));
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
