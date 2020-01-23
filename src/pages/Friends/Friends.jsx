import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import FriendsForm from "../../components/Friends/AddFriendForm";
import Style from "./Friends.module.css";
// import FriendList from "../../components/Friends/AddFriendForm";

class Friend extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    console.log(this.props);
    fetch("/api/friends", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ email: this.props.user.email })
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        console.log(jsonData);
        this.setState({
          friends: jsonData
        });
      });
  }

  handleDeleteFriend = (id, idx) => {
    return fetch(`/api/friends/${id}`, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        userEmail: this.props.user.email
      })
    }).then(res => res.json());
  };

  // let array = [...this.state.fiends]; // make a separate copy of the array
  // var index = array.indexOf(e.target.value);
  // if (index !== -1) {
  //   array.splice(index, 1);
  //   this.setState({ friends: array });
  // }
  // handleDelete = () => {
  //   this.setState({ user: userService.deleteFriend() });
  // };

  handleUpdateState = newFriend => {
    this.setState(prevState => ({
      friends: [...prevState.friends, newFriend]
    }));
  };

  render() {
    let friends = null;
    if (this.state.friends.length) {
      friends = this.state.friends.map((ele, idx) => {
        return (
          // <div key={idx}>
          <tr className={Style.tableTr} key={idx}>
            <td>{ele.name}</td>
            <td>{ele.email}</td>
            <td>{ele.phone}</td>
            <td>
              <button onClick={() => this.handleDeleteFriend(ele._id, idx)}>
                x
              </button>
            </td>
          </tr>
          // </div>
        );
      });
    }

    return (
      <div>
        <h1>Friends</h1>
        <div className={Style.Container}>
          <FriendsForm
            user={this.props.user}
            friends={this.handleUpdateState}
          />
          <table className={Style.tableFriends}>
            <thead>
              <tr className={Style.tableHeader}>
                <th>First Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{friends}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Friend;
