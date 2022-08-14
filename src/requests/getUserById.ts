import axios, { AxiosPromise } from "axios";
import { User } from "./getAllUsers";

type OneUsersRequest = {
  meta: null;
  data: User;
};

const getUserById: (id: number) => AxiosPromise<OneUsersRequest> = async (
  id: number
) => {
  let config = {
    method: "get",
    url: `https://gorest.co.in/public/v1/users/${id}`,
    headers: {
      Authorization:
        "Bearer 3494987d0f8b764c2d9f4f08cb147a35ead902641456dd32228ddcee2347b3b9",
    },
  };
  return axios(config);
};

export default getUserById;
