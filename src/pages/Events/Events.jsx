import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import EventsForm from "../../components/Events/AddEventForm";
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
  render() {
    let events = null;
    if (this.state.events.length) {
      events = this.state.events.map((ele, idx) => {
        return (
          // <div key={idx}>
          <tr key={idx}>
            <td>{ele.name}</td>
            <td>{ele.date}</td>
            <td>{ele.startTime}</td>
            <td>{ele.endTime}</td>
            <td>{ele.address}</td>
            <td>{ele.accessCode}</td>
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
        <h1>Events</h1>
        <EventsForm user={this.props.user} />
        <table>
          <thead>
            <tr>
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
    );
  }
}

export default Events;
