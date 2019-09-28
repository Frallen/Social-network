import React from "react"
import classes from "./find.module.scss";
import user from "./../../img/user.png"
import {NavLink} from "react-router-dom"
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
                <button
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
            props.Search.map(p => (
              <div key={p.id}>
                <div className={classes.profile}>
                  <div className={classes.avatarbox}>
                    <NavLink to={"/profile/"+p.id}>
                    <img
                      src={p.photos.small != null ? p.photos.small : user}
                      alt=""
                    />
                    </NavLink>
                  </div>
                  <div className={classes.info}>
                    <h3 className={classes.name}>{p.name}</h3>
                    <ul>
                      <li>{p.Age}</li>
                      <li>{p.Gender}</li>
                      <li>{p.City}</li>
                    </ul>
                  </div>
                  {p.followed ? (
                    <button
                      className={classes.follow}
                      onClick={() => {
                        props.follow(p.id);
                      }}
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      className={classes.follow}
                      onClick={() => {
                        props.unfollow(p.id);
                      }}
                    >
                      Unfollow
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
    
        </div>
    )
  }
/*
  <button onClick={props.loadusers} className={classes.loadbutton}>
  Load more
</button>
*/

  export default Users