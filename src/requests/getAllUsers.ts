import axios, {AxiosPromise} from "axios";

let config = {
    method: 'get',
    url: 'https://gorest.co.in/public/v1/users',
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

type AllUsersRequest = {
    meta:  {
        "pagination": {
            "total": number,
            "pages": number,
            "page": number,
            "limit": number,
            "links": {
                "previous": null | string,
                "current": string,
                "next": string
            }
        }
        },
    data: Array<User>
}

const getAllUsers: () => AxiosPromise<AllUsersRequest> = async () => {
    return axios(config);
}

export default getAllUsers;