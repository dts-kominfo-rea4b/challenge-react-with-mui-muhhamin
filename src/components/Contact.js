// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ dataContact }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <ListItem alignItems="flex-start" key={dataContact.email}>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={dataContact.photo} />
      </ListItemAvatar>
      <ListItemText
        primary={dataContact.name}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"></Typography>
            {dataContact.phone}
            <br />
            {dataContact.email}
          </React.Fragment>
        }
      />
    </ListItem>
    //   <Divider variant="inset" component="li" />
  );
};

export default Contact;
