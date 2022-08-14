import React from 'react';
import {Route, Routes} from "react-router-dom";
import UsersTable from "./pages/UsersTable";

function App() {
  return (
  <Routes>
    <Route path="/users" element={<UsersTable/>}>
    </Route>
  </Routes>
  );
}

export default App;
