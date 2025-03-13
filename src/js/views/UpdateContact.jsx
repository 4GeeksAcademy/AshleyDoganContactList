import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const UpdateContact = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    id: "",
  });
  useEffect(() => {
    setContact(store.contacts.find((item) => item.id == params.theid));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    };
    let response = await fetch(
      "https://playground.4geeks.com/contact/agendas/ashleydogan/contacts/" +
        contact.id,
      options
    );
    if (response.status !== 200) {
      alert(
        "we were unable to update your contact at this time, please try again later"
      );
    } else {
      let data = await response.json();
      console.log(data);
      actions.loadAgendaContacts();
      alert("Your contact was successfully updated");
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
            type="text"
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
