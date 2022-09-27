import "./App.css";
import React, { useState } from "react";
import { Grid, List } from "@mui/material";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setDataContacts] = useState(contactsJSON);

  const addNewContact = (inputDataContact) => {
    const dataContact = {
      name: inputDataContact.name,
      phone: inputDataContact.phone,
      email: inputDataContact.email,
      photo: inputDataContact.photo,
    };
    setDataContacts([...contacts, dataContact]);
  };

  return (
    <div className="App">
      <Header />
      <Grid container spacing={5} padding={3}>
        <Grid item xs={6} padding={3}>
          <ContactForm addNewContacts={addNewContact} />
        </Grid>
        <Grid item xs={6} padding={3}>
          {contacts.map((data, index) => (
            <Contact key={index} dataContact={data} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
