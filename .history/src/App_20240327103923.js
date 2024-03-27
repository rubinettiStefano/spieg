import Subject from "./Subject";


function App() 
{
  let testo = "CIAO";
  let veramenteBrutto = "<h1>"+testo+"</h1>";
  let menoBrutto = `<h1>${testo.toLowerCase()}</h1>`;

  return (
    <h1>{testo.toLowerCase()}</h1>
  );
}

export default App;
