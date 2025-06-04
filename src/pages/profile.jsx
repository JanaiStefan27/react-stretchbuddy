import React, { useEffect, useState } from "react";
import { useTheme } from "../context/themecontext";
import { auth } from "../firebase/firebase";

const Profile = () => {
  const { theme } = useTheme();
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName || "Utilizator");
    }
  }, []);

  return (
    <div className={`container py-5 text-center ${theme}`}>
      <h2 className="mb-4">Profilul meu</h2>
      <p className="lead">
        Bun venit, <strong>{displayName}</strong>!
      </p>
      <p>Mai multe funcționalități urmează să fie adăugate aici. 🛠️</p>
    </div>
  );
};

export default Profile;
