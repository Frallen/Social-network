import React from "react";
import { NavLink } from "react-router-dom";
import user from "./../../img/user.png";
import classes from "./find.module.scss";
const Users =(props)=>{

  /*Для вывода конкретного числа пользователей делим общее число пользователей на размер страницы */
    //  матх.сейл это округление в большую сторону
    // ебать в корень пагинатор
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
 
    return(
  <div className={classes.ns}>
          <div className={classes.pages}>
            {pages.map(p => {
              return (
                <button key={p.id}
                  className={props.currentPage === p && classes.selectedpage}
                  onClick={e => {
                    props.onPageChanged(p);
                  }}
                >
                  {p}
                </button>
              );
            })}
          </div> 
          <div className={classes.container}>
            {/*Теперь из-за классовой компоненты недоступны пропсы,нужен this */
            props.Search.map(u => (
              <div key={u.id}>
                <div className={classes.profile}>
                  <div className={classes.avatarbox}>
                    <NavLink to={"/profile/"+u.id}>
                    <img
                      src={u.photos.small != null ? u.photos.small : user}
                      alt=""
                    />
                    </NavLink>
                  </div>
                  <div className={classes.info}>
                    <h3 className={classes.name}>{u.name}</h3>
                    <ul>
                      <li>{u.Age}</li>
                      <li>{u.Gender}</li>
                      <li>{u.City}</li>
                      <li className={classes.status}>{u.status}</li>
                    </ul>
                  </div>
  {u.followed ? <button disabled={props.followInProgress.some(id=>id===u.id)} className={classes.unfollow} onClick={() => {
                 props.follow(u.id)
 }} >Unfollow</button> :<button disabled={props.followInProgress.some(id=>id===u.id)} className={classes.follow} onClick={() => { 
                props.unfollow(u.id)
                  }}>Follow</button> 
                  }</div>
              </div>
            ))}
          </div>
        </div>
    )
  }


  export default Users