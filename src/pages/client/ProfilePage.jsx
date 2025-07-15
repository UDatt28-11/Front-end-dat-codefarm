import React from "react";
import { useParams, Navigate } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("user:", user);
  console.log("param id:", id);

  // if (String(user.id) !== String(id)) {
  //   return <Navigate to="/" replace />;
  // }

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <img
            src={user.avatar}
            alt="Avatar"
            className="rounded-circle mb-3"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <h3 className="card-title">{user.fullName}</h3>
          <p className="card-text">Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
