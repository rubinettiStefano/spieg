import { useEffect, useState } from "react";
import Person from "./Person";
import Subject from "./Subject";
import 'bootstrap/dist/css/bootstrap.css';
import axios, { Axios } from "axios";

function App() 
{

  let [people,setPeople] =useState([]);

  useEffect(
    function()
    {
      axios.get("/people").then((response)=>setPeople(response.data));
    },
    []
  );

  function changeAge(id,newAge)
  {
    let clone = [...people];
    let pos = clone.findIndex(p=>p.id==id);
    clone[pos].age = newAge;
    axios.put(`/people/${clone[pos].id}`,clone[pos]);
    setPeople(clone);

  }


  return (
    <>
      {people.map(person=><Person {...person} changeAge={changeAge}/>)}
    </>
  );
}

export default App;
