import React from "react";
import { Routes } from "../config";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  UpdateAvailable,
  UpdateActivated,
  WorkBoxProvider,
} from "react-workbox";

function App() {
  return (
    <WorkBoxProvider interval={30 * 1000}>
      <Routes />
      <UpdateAvailable>
        Update Available - This message should be visible only for small time,
        as the new version should be activated asap. It is recommended to remove
        UpdateAvailable if you do not need it.
      </UpdateAvailable>
      <UpdateActivated>
        <button onClick={() => window.location.reload(true)}>
          Update Activated - Click to Refresh
        </button>
      </UpdateActivated>
    </WorkBoxProvider>
  );
}

export default App;
