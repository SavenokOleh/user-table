import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import UsersTable from "./pages/UsersTable";
import EditUser from "./pages/EditUser";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <ToastContainer autoClose={3000} theme="dark"/>
            <Routes>
                <Route path="/users" element={<UsersTable/>}/>
                <Route path="/users/:id/edit" element={<EditUser/>}/>
                <Route path="*" element={<Navigate to="users"/>}/>
            </Routes>
        </>
    );
}

export default App;
