import React, { useContext, useEffect } from "react";
import ContactCard from "../component/contactCard.jsx";
import { Context } from "../store/appContext.js";


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
            

            <ContactCard key={contact.id}
              name={contact.name}
              phone={contact.phone}
              email={contact.email}
              address={contact.address}
            />
          );
        })}
      </div>
    </>
  );
};

export default Contacts;
