import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  onSubmit,
}) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      name="name"
      value={name}
      required
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter Name"
    />
    <input
      type="tel"
      name="phone"
      value={phone}
      required
      onChange={(e) => setPhone(e.target.value)}
      placeholder="Enter Phone"
      pattern="^[0-9]\d{2}-\d{3}-\d{4}$"
    />
    <input
      type="email"
      name="email"
      value={email}
      required
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter Email"
    />
    <input type="submit" value="Submit"></input>
  </form>
);
