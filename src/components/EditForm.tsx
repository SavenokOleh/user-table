import React from 'react';
import {Button, FormControl, TextField, NativeSelect, Container} from "@mui/material";
import {RootState, useAppDispatch} from "../store";
import updateUser from "../store/actions/updateUser";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {cleanCurrentUser, updateEmail, updateGender, updateName, updateStatus} from "../store/reducers/userReducer";

const EditForm: React.FunctionComponent = () => {
    const currentUserData = useSelector((state: RootState) => state.userReducer.currentUser);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const onSave = () => {
        currentUserData && toast.promise(dispatch(updateUser(currentUserData)), {
            pending : "Trying to update user data",
            success: "User successfully updated",
            error: "Something goes wrong with user updating"
        })
            .then(() => navigate('/users'));
        dispatch(cleanCurrentUser());
    }

    return (
        <Container maxWidth="md">
            <FormControl fullWidth>
                <TextField
                    margin="normal"
                    type="text"
                    variant="outlined"
                    value={currentUserData && currentUserData.name}
                    onChange={(event) => dispatch(updateName(event.target.value))}
                />

                <TextField
                    margin="normal"
                    type="email"
                    variant="outlined"
                    value={currentUserData && currentUserData.email}
                    onChange={(event) => dispatch(updateEmail(event.target.value))}
                />
                <FormControl>
                    <NativeSelect
                        variant="outlined"
                        defaultValue={currentUserData && currentUserData.gender}
                        inputProps={{
                            name: 'gender',
                            id: 'uncontrolled-native',
                        }}
                        onChange={(event) => dispatch(updateGender(event.target.value))}
                    >
                        <option value={'male'}>male</option>
                        <option value={'female'}>female</option>
                    </NativeSelect>
                </FormControl>
                <br/>
                <FormControl>
                    <NativeSelect
                        variant="outlined"
                        defaultValue={currentUserData && currentUserData.status}
                        inputProps={{
                            name: 'status',
                            id: 'uncontrolled-native',
                        }}
                        onChange={(event) => dispatch(updateStatus(event.target.value))}
                    >
                        <option value={'active'}>active</option>
                        <option value={'inactive'}>inactive</option>
                    </NativeSelect>
                </FormControl>
                <br/>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onSave}
                >
                    SAVE
                </Button>
            </FormControl>
        </Container>
    );
}

export default EditForm;
