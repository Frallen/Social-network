import React from "react"
import Info from "./Info"

const InfoConatiner=(props)=>{


    return(
        <Info Bio={props.store.getState().Profile.Bio}></Info>
    )
}

export default InfoConatiner