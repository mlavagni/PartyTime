import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import Style from "./ProfileUpdate.module.css";

const ProfileUpdateForm = props => {
  // handleChange = e => {
  //   // this.props.updateMessage("");
  //   this.setState({
  //     // Using ES2015 Computed Property Names
  //     [e.target.name]: e.target.value
  //   });
  // };

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   try {
  //     await fetch("/api/user/search", {
  //       method: "POST",
  //       headers: new Headers({ "Content-Type": "application/json" }),
  //       body: JSON.stringify({
  //         user: this.state,
  //         userEmail: this.props.user.email
  //       })
  //     });

  //     // this.props.history.push("/");
  //   } catch (err) {
  //     console.log(err);
  //     // Invalid user data (probably duplicate email)
  //     // this.props.updateMessage(err.message);
  //   }
  // };

  // isFormInvalid() {
  //   return !(this.state.name && this.state.email && this.state.phone);
  // }

  return (
    <div className={Style.divContainer}>
      <header className="header-footer">Modify User</header>
      <form className="form-horizontal">
        {/* onSubmit={this.handleSubmit} */}
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="text"
              className={Style.imputText}
              placeholder="Name"
              value={props.user.name}
              name="name"
              // onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="email"
              className={Style.imputText}
              placeholder="Email"
              value={props.user.email}
              name="email"
              // onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="phone"
              className={Style.imputText}
              placeholder="Phone"
              value={props.user.phone}
              name="phone"
              // onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-12 text-center">
            <button className={Style.submitButton}>
              {/* disabled={this.isFormInvalid()} */}
              Save
            </button>
            &nbsp;&nbsp;
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdateForm;
