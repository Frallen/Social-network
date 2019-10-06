import React from "react"
import classes from "./../profile.module.scss"
class ProfileInfo extends React.Component{
    state={
        editmode:false,
    }

    ActiveEdit=()=>{
     
        console.log(this)
        this.setState({// setState асинхронен
        
            editmode:true
        })
    }
    DeActiveEdit=()=>{
        this.setState({
            editmode:false
        })
    }
    
render(){
   return<>
  <ul className={classes.info}>
    <li className={classes.infoitems}>Date of Birth:&nbsp;b.dob</li>
    {//если едитмод тру то инпут если нет то li
        this.state.editmode ? <input type="text" autoFocus={true} onBlur={this.DeActiveEdit} className={classes.editStatus}/> : 
    <li className={classes.infoitems} onDoubleClick={this.ActiveEdit}>{this.props.Profile.aboutMe}</li>}

      <li className={classes.infoitems}>Website&nbsp;{this.props.Profile.contacts.website}</li>
     </ul>
        </>
    }
}

export default ProfileInfo