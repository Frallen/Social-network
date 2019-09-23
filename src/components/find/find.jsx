import React from "react";
import classes from "./find.module.scss";
import * as axios from "axios";

class find extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.SetUsers(response.data.items);
        this.props.SetTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = pageNumer => {
    this.props.SetCurrentPage(pageNumer);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumer}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.SetUsers(response.data.items);
      });
  };

  render() {
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return (
      <div className={classes.ns}>
        <div className={classes.pages}>
          {pages.map(p => {
            return (
              <button
                className={this.props.currentPage === p && classes.selectedpage}
                onClick={e => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </button>
            );
          })}
        </div>
        <div className={classes.container}>
          {/*Теперь из-за классовой компоненты недоступны пропсы,нужен this */
          this.props.Search.map(p => (
            <div key={p.id}>
              <div className={classes.profile}>
                <div className={classes.avatarbox}>
                  <img
                    src={p.photos.small != null ? p.photos.small : p.photo}
                    alt=""
                  />
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
                      this.props.follow(p.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    className={classes.follow}
                    onClick={() => {
                      this.props.unfollow(p.id);
                    }}
                  >
                    Unfollow
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <button onClick={this.loadusers} className={classes.loadbutton}>
          Load more
        </button>
      </div>
    );
  }
}

export default find;
