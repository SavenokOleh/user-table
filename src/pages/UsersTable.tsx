import React, {useEffect} from "react";
import PaginationTable from "../components/PaginationTable";
import getUsers from "../store/actions/getUsers";
import {useAppDispatch} from "../store";
import {Container} from "@mui/material";
import {toast} from "react-toastify";

const UsersTable: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        toast.promise(dispatch(getUsers()), {
            pending : "Trying to get all users data",
            success: "Successfully got all users",
            error: "Something goes wrong with user fetching"
        });
    }, [dispatch]);

    return(
        <Container maxWidth="lg">
            <PaginationTable/>
        </Container>
    );
}

export default UsersTable;
