import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  onSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title"
      />
      <ContactPicker
        name="contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        contacts={getContactNames()}
        placeholder="Contact with"
      />
      <input
        type="date"
        name="date"
        value={date}
        required
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
      />
      <input
        type="time"
        name="time"
        value={time}
        required
        onChange={(e) => setTime(e.target.value)}
      />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
