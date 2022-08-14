import React from 'react';
import {Route, Routes} from "react-router-dom";
import UsersTable from "./pages/UsersTable";
import EditUser from "./pages/EditUser";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <ToastContainer autoClose={10000} theme="dark"/>
            <Routes>
                <Route path="/users" element={<UsersTable/>}/>
                <Route path="/users/:id/edit" element={<EditUser/>}/>
            </Routes>
        </>
    );
}

export default App;
