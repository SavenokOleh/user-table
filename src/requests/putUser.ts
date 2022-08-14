import axios, {AxiosPromise} from "axios";
import {User} from "./getAllUsers";

type OneUsersRequest = {
    meta:  null,
    data: User
}

const putUser: (data: User) => AxiosPromise<OneUsersRequest> = async (data: User) => {
    let dataJSON = JSON.stringify(data);

    let config = {
        method: 'put',
        url: `https://gorest.co.in/public/v1/users/${data.id}`,
        headers: {
            'Authorization': 'Bearer 3494987d0f8b764c2d9f4f08cb147a35ead902641456dd32228ddcee2347b3b9',
            'Content-Type': 'application/json'
        },
        data: dataJSON
    };
    return axios(config);
}

export default putUser;