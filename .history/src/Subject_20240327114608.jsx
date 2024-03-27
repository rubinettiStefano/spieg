import { useState } from "react";

export default function Subject(props) /* props -> {name:"Java",min:1,max:10} */
{
    // il MODEL del component
    //props -> valori (anche le funzioni possono essere valori) che arrivano dall'esterno (da componente padre)
    //state -> valori del componente stesso

    //props sono IMMUTABILI (read-only)
    //state è mutabile (tramite setter), ogni volta che cambia la funzione viene rieseguito
    //ciò comporta che venga rifatto RETURN
    //quando cambia lo state il componente viene rigraficato in automatico

    const [grade,setGrade] = useState(6); //HOOK
    //abbiamo creato un attributo nello state chiamato "grade"
    //abbiamo creato una funzione che permette di assegnargli un nuovo valore, setGrade
    //abbiamo definito che il suo valore iniziale è 6
    //setGrade(8) imposta il valore di grade a 8


    const handleGradeChange = (e)=>
    {
        let elementName = e.target.name;
        
        if(elementName=="bottoncino-" && grade!=props.sub.min)
            setGrade(grade-1);

        if(elementName=="bottoncino+" && grade!=props.sub.max)
            setGrade(grade+1);
    }

    return(
        <div className="p-4">

            <h1>{props.sub.name}</h1>
            <h2>Il voto attuale è: {grade}</h2>
            {/* <button className="btn btn-primary" onClick={function (){setGrade(grade-1)}}>-</button> */}
            <button name="bottoncino-" className="btn btn-primary" onClick={handleGradeChange}>-</button>
            <button name="bottoncino+" className="btn btn-primary ms-5"  onClick={handleGradeChange}>+</button>
            {/* <button className="btn btn-primary ms-5"  onClick="setGrade(grade+1)">+</button> */}
        </div>
    );
}