import Myposts from "./myposts"
import { connect } from "react-redux"






let mapStateToProps=(state)=>{
    return{
        posts:state.Profile.P
    }
}

const MypostContainer=connect(mapStateToProps)(Myposts)

export default MypostContainer