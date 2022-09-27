// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { useState } from "react";
import { Card, TextField, Stack, Button } from "@mui/material";

const ContactForm = (props) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [addData, setAddData] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  const inputHandler = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setAddData((values) => ({ ...values, [name]: value }));
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    props.addNewContacts(addData);
    setAddData(addData);
  };

  return (
    <>
      <Card variant="outlined">
        <form action="" onSubmit={onSubmitForm}>
          <Stack spacing={2} sx={{ mx: 4, my: 3 }}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              variant="standard"
              value={addData.name}
              onChange={inputHandler}
            />
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone"
              variant="standard"
              value={addData.phone}
              onChange={inputHandler}
            />
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              variant="standard"
              value={addData.email}
              onChange={inputHandler}
            />
            <TextField
              id="photo"
              name="photo"
              label="Photo URL"
              variant="standard"
              value={addData.photo}
              onChange={inputHandler}
            />
            <br />
            <Button type="submit">ADD NEW</Button>
          </Stack>
        </form>
      </Card>
    </>
  );
};

export default ContactForm;
