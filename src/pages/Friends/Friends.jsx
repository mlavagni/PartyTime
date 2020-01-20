import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import FriendsForm from "../../components/Friends/AddFriendForm";
import FriendList from "../../components/Friends/AddFriendForm";

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
  render() {
    let friends = null;
    if (this.state.friends.length) {
      friends = this.state.friends.map((ele, idx) => {
        return (
          // <div key={idx}>
          <tr key={idx}>
            <td>{ele.name}</td>
            <td>{ele.email}</td>
            <td>{ele.phone}</td>
            <td>
              <button>x</button>
            </td>
          </tr>
          // </div>
        );
      });
    }

    return (
      <div>
        <h1>friends</h1>
        <FriendsForm user={this.props.user} />
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{friends}</tbody>
        </table>
      </div>
    );
  }
}

export default Friend;
