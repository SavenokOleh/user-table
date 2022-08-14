import axios, {AxiosPromise} from "axios";

let config = {
    method: 'get',
    url: 'https://gorest.co.in/public/v2/users',
    headers: {
        'Authorization': 'Bearer 3494987d0f8b764c2d9f4f08cb147a35ead902641456dd32228ddcee2347b3b9'
    }
};

export type User = {
    id: number,
    name: string,
    email: string,
    gender: string,
    status: string
}

const getAllUsers: () => AxiosPromise<Array<User>> = async () => {
    return axios(config);
}

export default getAllUsers;