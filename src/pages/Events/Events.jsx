import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import EventsForm from "../../components/Events/AddEventForm";
import Moment from "moment";
import Style from "./Events.module.css";
// import EventList from "../../components/Events/AddEventForm";

class Events extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    console.log(this.props);
    fetch("/api/events", {
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
          events: jsonData
        });
      });
  }

  handleDeleteFriend = (id, idx) => {
    return fetch(`/api/events/${id}`, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        userEmail: this.props.user.email
      })
    }).then(res => res.json());
  };
  render() {
    let events = null;
    if (this.state.events.length) {
      events = this.state.events.map((ele, idx) => {
        return (
          // <div key={idx}>
          <tr className={Style.tableTr} key={idx}>
            <td>{ele.name}</td>
            {/* {Moment(ele.date).format('YYYY-MM-DD')} */}
            <td>{Moment(ele.date).format("YYYY-MM-DD")}</td>
            <td>{ele.startTime}</td>
            <td>{ele.endTime}</td>
            <td>{ele.address}</td>
            <td>{ele.accessCode}</td>
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
        <h1>Events</h1>
        <div className={Style.Container}>
          <EventsForm user={this.props.user} />
          <table className={Style.tableFriends}>
            <thead>
              <tr className={Style.tableHeader}>
                <th>Event Name</th>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Address</th>
                <th>Access Code</th>
              </tr>
            </thead>
            <tbody>{events}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Events;
