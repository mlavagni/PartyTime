import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";

class AddEventForm extends Component {
  state = {
    name: "",
    date: new Date(),
    startTime: "",
    endTime: "",
    address: "",
    // guestList: [],
    status: Boolean,
    accessCode: ""
  };

  handleChange = e => {
    // this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await fetch("/api/events/create", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({
          event: this.state,
          userEmail: this.props.user.email
        })
      });

      // this.props.history.push("/");
    } catch (err) {
      console.log(err);
      // Invalid user data (probably duplicate email)
      // this.props.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !(this.state.name && this.state.date && this.state.address);
  }

  render() {
    return (
      <div>
        <header className="header-footer">Add Event</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="date"
                className="form-control"
                placeholder="Date"
                value={this.state.date}
                name="date"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Start Time"
                value={this.state.startTime}
                name="startTime"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="End Time"
                value={this.state.endTime}
                name="endTime"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={this.state.address}
                name="address"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Access Code"
                value={this.state.accessCode}
                name="accessCode"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button
                className="btn btn-default"
                disabled={this.isFormInvalid()}
              >
                Save
              </button>
              &nbsp;&nbsp;
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddEventForm;
