import React from "react";
import classes from "./../profile.module.scss";
class ProfileInfo extends React.Component {
  state = {
    editmode: false,
    status: this.props.status
  };

  ActiveEdit = () => {
    this.setState({
      // setState асинхронен

      editmode: true
    });
  };
  DeActiveEdit = () => {
    this.setState({
      editmode: false
    });
    this.props.UpdateStatus(this.state.status);
  };
  UpdateStatus = e => {
    this.setState({
      status: e.currentTarget.value
    });
  };

  componentDidUpdate(){
    if(this.state.status !== this.props.status){
    this.setState({
      status:this.props.status
    })}
  }

  render() {
    return (
        <div>
        <ul className={classes.info}>
          <li className={classes.infoitems}>Date of Birth:&nbsp;b.dob</li>
          {//если editmode true то инпут если нет то li
            this.state.editmode ? 
            <input
              type="text"
              onChange={this.UpdateStatus}
              value={this.state.status}
              autoFocus={true}
              onBlur={this.DeActiveEdit}
              className={classes.editStatus}
            /> :  <li className={classes.infoitems} onDoubleClick={this.ActiveEdit}>
              {!this.state.status ? "My status" : this.state.status}</li>}
          <li>{this.props.Profile.aboutMe}</li>
          <li className={classes.infoitems}>Website&nbsp;</li>
        </ul>
        </div>
    )
    
  }
}

export default ProfileInfo;
