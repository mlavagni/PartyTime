import React, { Component } from "react";
import ProfileUpdateForm from "../../components/Profile/ProfileUpdateForm";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  updateMessage = msg => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <div className="profilePage">
        <ProfileUpdateForm
          user={this.props.state.user}
          // {...this.props}
          // handleSignupOrLogin={this.props.handleSignupOrLogin}
          // updateMessage={this.updateMessage}
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default ProfilePage;
