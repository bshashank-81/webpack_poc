import React, { useState } from "react";
import useForm from "react-hook-form";
import "../../styles/styles.css";

function Form() {
  const handleSubmit = () => {};

  return (
    <form className="App" onSubmit={handleSubmit}>
      <h1>Basic Form</h1>
      <label>First Name:</label>
      <input name="firstName" />

      <label>Last Name:</label>
      <input name="firstName" />

      <label>Gender</label>
      <select name="gender">
        <option>Select...</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <label>Username</label>
      <input name="username" />

      <label>Email</label>
      <input name="email" />

      <label>About you</label>
      <textarea name="about you" />

      <input type="submit" />
    </form>
  );
}

export default Form;
