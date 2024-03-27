import { useState } from "react";

export default function Person(props)
{

    // const handleAgeChange = (e)=>
    // {
    //     let elementName = e.target.name;
        
    //     if(elementName=="bottoncino-")
    //     {
    //         let newMe = {...me};
    //         newMe.age = me.age-1;
    //         setMe(newMe);
    //     }

    //     if(elementName=="bottoncino+")
    //     {
    //         let newMe = {...me};
    //         newMe.age = me.age+1;
    //         setMe(newMe);
    //     }


    // }



    return(
        <div className="p-4">
            <h1>{props.name} {props.surname}</h1>

            <h2>Ho {props.age} anni</h2>

            <button name="bottoncino-" className="btn btn-primary" onClick={handleAgeChange}>-</button>
            <button name="bottoncino+" className="btn btn-primary ms-5"  onClick={handleAgeChange}>+</button>
        </div>

    )
}