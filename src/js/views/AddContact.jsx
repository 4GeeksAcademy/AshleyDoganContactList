import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    };
    let response = await fetch(
      "https://playground.4geeks.com/contact/agendas/ashleydogan/contacts",
      options
    );
    if (response.status !== 201) {
      alert(
        "we were unable to add your contact at this time, please try again later"
      );
    } else {
      let data = await response.json();
      console.log(data);
      actions.loadAgendaContacts();
      setContact({
        name: "",
        phone: "",
        address: "",
        email: "",
      });
      alert("Your contact was successfully added");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            value={contact.name}
            onChange={(e) => {
              setContact({ ...contact, name: e.target.value });
              console.log(contact);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            value={contact.phone}
            onChange={(e) => {
              setContact({ ...contact, phone: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label for="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={contact.address}
            onChange={(e) => {
              setContact({ ...contact, address: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={contact.email}
            onChange={(e) => {
              setContact({ ...contact, email: e.target.value });
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Link to="/">Return home</Link>
    </>
  );
};

export default AddContact;
