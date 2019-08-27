import React from "react";
import Bio from "./bio/bio";
const Info = (props) =>{

    let bioinfo = props.Bio.map(b=><Bio id={b.id} name={b.name} dob={b.dob} city={b.city} edu={b.edu} website={b.website}></Bio>)
    return(
   <div>
       {bioinfo}
   </div>
    )
}

export default Info;