import { useState } from "react";

export default function Stefano()
{
    const [me,setMe] = useState(
        {
            name:"Stefano",
            surname:"Rubinetti",
            age:28
        }
    );


    return(
        <div className="p-4">
            <h1>{me.name} {me.surname}</h1>

            <h2>Ho {me.age} anni</h2>

            <button name="bottoncino-" className="btn btn-primary" onClick={handleGradeChange}>-</button>
            <button name="bottoncino+" className="btn btn-primary ms-5"  onClick={handleGradeChange}>+</button>
        </div>

    )
}