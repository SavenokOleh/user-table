import React, {useEffect, useState} from "react";
import EditForm from "../components/EditForm";
import {useParams, Navigate} from "react-router-dom";
import getUser from "../store/actions/getUser";
import {RootState, useAppDispatch} from "../store";
import {useSelector} from "react-redux";
import {User} from "../requests/getAllUsers";
import {toast} from "react-toastify";

const EditUser: React.FunctionComponent = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const currentUserData = useSelector((state: RootState) => state.userReducer.currentUser);
    const [isUser, setUser] = useState<User | null>(currentUserData);

    useEffect(() => {
        id && toast.promise(dispatch(getUser(+id)), {
            pending : "Trying to fetch user data",
            success: "Successfully got this user",
            error: "Something goes wrong with fetching data"
        });
    }, [dispatch, id])
    return(
        isUser ?  <EditForm user={{isUser: isUser, setUser: setUser}}/> : <Navigate to='/users'/>

    );
}

export default EditUser;
