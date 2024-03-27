import { useState } from "react";

export default function Person(props)
{

    const handleAgeChange = (e)=>
    {
        let elementName = e.target.name;
        
        if(elementName=="bottoncino-")
        {
            props.changeAge(props.id,props.age-1);
        }

        if(elementName=="bottoncino+")
        {
            props.changeAge(props.id,props.age+1);
        }


    }



    return(
        <div className="p-4">
            <h1>{props.name} {props.surname}</h1>

            <h2>Ho {props.age} anni</h2>

            <button name="bottoncino-" className="btn btn-primary" onClick={handleAgeChange}>-</button>
            <button name="bottoncino+" className="btn btn-primary ms-5"  onClick={handleAgeChange}>+</button>
        </div>

    )
}