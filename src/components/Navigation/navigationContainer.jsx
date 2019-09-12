import { connect } from "react-redux";
import Navigation from "./navigation"

let mapStateToProps=(state)=>{
    return{
        friends:state.Navigation.Navigation
    }
}
const NavigationContainer=connect(mapStateToProps)(Navigation)

export default NavigationContainer