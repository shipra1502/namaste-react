import UserClass from "./UserClass";
import { Component } from "react";

class AboutClass extends Component {
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is a food ordering app</h2>
        <UserClass />
      </div>
    );
  }
}

export default AboutClass;
