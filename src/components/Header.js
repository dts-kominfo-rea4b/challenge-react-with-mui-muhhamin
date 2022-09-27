// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import "./Header.css";
import React from "react";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <div>
      <h1>Call a Friend</h1>
      <h4>Your friendly contact app</h4>
    </div>
  );
};

export default Header;
