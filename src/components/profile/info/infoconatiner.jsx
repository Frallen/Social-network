import Info from "./Info"
import { connect } from "react-redux"


let mapStateToProps=(state)=>{
    return{
        Bio:state.Profile.Bio
    }
}


const InfoConatiner=connect(mapStateToProps)(Info)

export default InfoConatiner