import React from "react";

const ContactCard = ({ name, phone, address, email }) => {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-3">
            <img src="https://placedog.net/100/100" alt="idPic" />
          </div>
          <div className="col-9">
            <div className="contact-info">
              <h5 className="card-name">{name}</h5>
              <p className="contact-phone">{phone}</p>
              <p className="contact-address">{address}</p>
              <p className="contact-email">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
