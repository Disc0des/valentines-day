import "./App.css";
import React, { useState } from "react";
import pic1 from "./pic-1.png";
import pic2 from "./pic-2.png";
import pic3 from "./pic-3.png";
import pic4 from "./pic-4.png";

function App() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [picture, setPicture] = useState();

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toUpperCase() === "TURTLE") {
      setPicture(pic1);
      setMessage("Washing Machine");
    } else if (password.toUpperCase() === "HALCYON") {
      setPicture(pic2);
      setMessage("Your Sock Drawer");
    } else if (password.toUpperCase() === "334") {
      setPicture(pic3);
      setMessage("In the poof");
    } else if (password.toUpperCase() === "BEAUMARIS") {
      setPicture(pic4);
      setMessage("Bathroom Sink");
    } else {
      setMessage("Wrong Code !");
    }
  };

  return (
    <div className="app">
      <h1>Happy Valentines Day Lloydy!</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="input-box"
          type="text"
          name="input"
          value={password}
          onChange={handleChange}
        />
        <button className="submit-button" type="submit">
          Submit Code
        </button>
      </form>
      {message && <div className="message">{message}</div>}
      {picture && (
        <div className="picture">
          <img src={picture} alt="pic" />
        </div>
      )}
    </div>
  );
}

export default App;
