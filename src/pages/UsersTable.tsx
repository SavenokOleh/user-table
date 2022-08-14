import React, {useEffect} from "react";
import PaginationTable from "../components/PaginationTable";
import getUsers from "../store/actions/getUsers";
import {useAppDispatch} from "../store";

const UsersTable: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return(
        <PaginationTable/>
    );
}

export default UsersTable;
