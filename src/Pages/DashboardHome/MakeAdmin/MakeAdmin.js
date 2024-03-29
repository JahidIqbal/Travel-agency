import React, { useState } from "react";
import admin from "../../../Images/Holiday 1.jpg";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://travel-agency-server-ru04.onrender.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h3 className="text-dark fw-bolder ">ADMIN</h3>
      <form onSubmit={handleAdminSubmit}>
        <input
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          placeholder="Email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <button
          type="submit"
          className=" btn btn-dark border-0"
          style={{ background: `linear-gradient(to right, #b993d6, #8ca6db)` }}
        >
          Make Admin
        </button>
      </form>
      {success && (
        <div className="alert alert-success" role="alert">
          Admin created successFully!
        </div>
      )}
    </div>
  );
};

export default MakeAdmin;
