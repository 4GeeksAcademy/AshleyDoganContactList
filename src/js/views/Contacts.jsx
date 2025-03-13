import React, { useContext, useEffect } from "react";
import ContactCard from "../component/contactCard.jsx";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const Contacts = () => {
  const { store, actions } = useContext(Context);

  // useEffect(() => {
  //   actions.loadAgendaContacts();
  // }, []);

  return (
    <>
      <div>
        {store.contacts.map((contact) => {
          return (
            <div key={contact.id}>
              <div className="card">
                <div className="row">
                  <div className="col-8">
                    <ContactCard
                      name={contact.name}
                      phone={contact.phone}
                      email={contact.email}
                      address={contact.address}
                    />
                  </div>
                  <div className="buttons col-4">
                    <Link to={"/update-contact/" + contact.id}>
                      <button className="btn btn-secondary" id="update-button">
                        Update
                      </button>
                    </Link>
                    <button
                      className="btn btn-secondary"
                      onClick={() => actions.deleteContact(contact.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contacts;
