
import "./App.css";
import { SessionContext } from "./context/SessionContext";
import { useState } from "react";
import { RouterProvider } from "react-router/dom";
import { router } from "./router";
import { currentUser } from "./data/mockDashboard";

function App() {
  const [username] = useState(currentUser.name);

  return (
    <>
      <SessionContext.Provider value={username}>
        <RouterProvider router={router} />
      </SessionContext.Provider>
    </>
  );
}

export default App;
