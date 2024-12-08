import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  return (
    <div className="wysrodkowanie">
      <h1>Profil użytkownika</h1>
      <p>Witaj, użytkowniku o ID: {id}</p>
    </div>
  );
};

export default Profile;
