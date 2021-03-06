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

  handleUpdateState = newEvent => {
    this.setState(prevState => ({
      events: [...prevState.events, newEvent]
    }));
  };

  handleDeleteFriend = (id, idx) => {
    return fetch(`/api/events/${id}`, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        userEmail: this.props.user.email
      })
    })
      .then(response => {
        console.log("awaitin response");
        return response.json();
      })
      .then(jsonData => {
        console.log(jsonData);
        this.setState({
          events: jsonData
        });
      });
  };

  render() {
    let events = null;
    if (this.state.events.length) {
      events = this.state.events.map((ele, idx) => {
        return (
          <tr className={Style.tableTr} key={idx}>
            <td>{ele.name}</td>
            {/* <td>{ele.date}</td> */}
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
        );
      });
    }

    return (
      <div>
        <h1>Events</h1>
        <div className={Style.Container}>
          <EventsForm user={this.props.user} events={this.handleUpdateState} />
          <table className={Style.tableEvent}>
            <thead>
              <tr className={Style.tableHeader}>
                <th>Event Name</th>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Address</th>
                <th>Access Code</th>
                <th>Delete</th>
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
