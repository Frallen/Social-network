import React from "react"
import Myposts from "./myposts"

const MypostContainer=(props)=>{
    return(
        <Myposts posts={props.store.getState().Profile.P}></Myposts>
    )
}

export default MypostContainer