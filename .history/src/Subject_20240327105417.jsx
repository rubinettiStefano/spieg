export default function Subject(props) /* props -> {name:"Java",min:1,max:10} */
{
    // il MODEL del component
    //props -> valori (anche le funzioni possono essere valori) che arrivano dall'esterno (da componente padre)
    //state -> valori del componente stesso

    //props sono IMMUTABILI (read-only)
    //state è mutabile (tramite setter), ogni volta che cambia la funzione viene rieseguito
    //ciò comporta che venga rifatto RETURN
    //quando cambia lo state il componente viene rigraficato in automatico

    return(
        <>
            <h1>{props.name}</h1>
            <h3>min: {props.min} - max: {props.max}</h3>
        </>
    );
}