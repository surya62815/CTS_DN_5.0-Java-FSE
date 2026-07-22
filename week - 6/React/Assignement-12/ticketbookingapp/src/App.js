import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: "20px" }}>

      <h1>Ticket Booking App</h1>

      {
        isLoggedIn ? (
          <>
            <button onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>

            <hr />

            <UserPage />
          </>
        ) : (
          <>
            <button onClick={() => setIsLoggedIn(true)}>
              Login
            </button>

            <hr />

            <GuestPage />
          </>
        )
      }

    </div>
  );
}

export default App;