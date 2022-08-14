import React from 'react';
import {Button, FormControl, TextField, NativeSelect, Container} from "@mui/material";
import {User} from "../requests/getAllUsers";
import {useAppDispatch} from "../store";
import updateUser from "../store/actions/updateUser";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

interface EditFormI {
        user: {
            isUser: User,
            setUser: React.Dispatch<React.SetStateAction<User | null>>
        }
}

const EditForm: React.FunctionComponent<EditFormI> = (props) => {
    const {isUser, setUser} = props.user;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onUserDataChange = (event: { target: { value: string; }; }, field: string) => {
        setUser((state: any) => {
            return {...state, [field]: `${event.target.value}`}
        });
    }

    const onSave = () => {
        toast.promise(dispatch(updateUser(isUser)), {
            pending : "Trying to update user data",
            success: "User successfully updated",
            error: "Something goes wrong with user updating"
        })
            .then(() => navigate('/users'))
    }

    return (
        <Container maxWidth="md">
            <FormControl fullWidth>
                <TextField
                    margin="normal"
                    type="text"
                    label="Name"
                    variant="outlined"
                    value={isUser.name}
                    onChange={(e) => onUserDataChange(e, 'name')}
                />

                <TextField
                    margin="normal"
                    type="email"
                    label="Email"
                    variant="outlined"
                    value={isUser.email}
                    onChange={(e) => onUserDataChange(e, 'email')}
                />

                <NativeSelect
                    variant="outlined"
                    defaultValue={isUser.gender}
                    inputProps={{
                        name: 'gender',
                        id: 'uncontrolled-native',
                    }}
                    onChange={(e) => onUserDataChange(e, 'gender')}
                >
                    <option value={'male'}>male</option>
                    <option value={'female'}>female</option>
                </NativeSelect>
                <br/>
                <NativeSelect
                    variant="outlined"
                    defaultValue={isUser.status}
                    inputProps={{
                        name: 'status',
                        id: 'uncontrolled-native',
                    }}
                    onChange={(e) => onUserDataChange(e, 'status')}
                >
                    <option value={'active'}>active</option>
                    <option value={'inactive'}>inactive</option>
                </NativeSelect>
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
