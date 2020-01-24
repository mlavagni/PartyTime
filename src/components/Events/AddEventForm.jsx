import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import Style from "./AddEventForm.module.css";

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
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.props.events(data);
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
      <div className={Style.formcontainer}>
        <header className="header-footer">
          <h1 className="title">Add Event</h1>
        </header>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className={Style.divimput}>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className={Style.formimput}
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
                  className={Style.formimput}
                  placeholder="Date"
                  value={this.state.date.value}
                  name="date"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className={Style.formimput}
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
                  className={Style.formimput}
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
                  className={Style.formimput}
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
                  className={Style.formimput}
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
          </div>
        </form>
      </div>
    );
  }
}

export default AddEventForm;
