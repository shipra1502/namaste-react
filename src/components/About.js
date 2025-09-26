import UserClass from "./UserClass";
import { Component } from "react";

class AboutClass extends Component {
  render() {
    return (
      <div className="h-screen items-start w-screen bg-gradient-to-r from-gray-200 to-blue-200 flex justify-center">
        <div className="p-8 w-1/2 shadow-xl bg-gray-50 flex flex-col items-center justify-center text-center rounded-2xl mt-8">
          <h1 className="font-bold text-4xl mb-4">About Us</h1>
          <h2 className="mb-6 text-gray-600">
            This is a food ordering app where we can order food from various
            restaurants
          </h2>
        </div>
      </div>
    );
  }
}

export default AboutClass;
