const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      // changeColor: (index, color) => {
      // 	//get the store
      // 	const store = getStore();

      // 	//we have to loop the entire demo array to look for the respective index
      // 	//and change its color
      // 	const demo = store.demo.map((elm, i) => {
      // 		if (i === index) elm.background = color;
      // 		return elm;
      // 	});

      // 	//reset the global store
      // 	setStore({ demo: demo });
      // }

      // GET Single Agenda
      loadAgendaContacts: async () => {
        const response = await fetch(
          "https://playground.4geeks.com/contact/agendas/ashleydogan/contacts"
        );
        if (!response.ok) {
          throw new Error(response.status, response.statusText);
        }
        const data = await response.json();
        setStore({ contacts: data.contacts });
      },

      // You will need function to:
      // POST new contacts through the API
      createNewContact: async (contactObject) => {
        const response = await fetch("https://playground.4geeks.com/contact/agendas/ashleydogan/contacts", {
          method: "POST",
          body: JSON.stringify(contactObject),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if(!response.ok) {
          throw new Error(response.status, response.statusText)
        } 
      },
      // PUT updated contacts through the API
      // DELETE contacts through the API
      deleteContact: async (contactId) => {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/ashleydogan/contacts/${contactId}`, {
          method: "DELETE",
        });
        if(!response.ok) {
          throw new Error(response.status, response.statusText)
        }
        getActions().loadAgendaContacts();
      }
    },
  };
};

export default getState;
