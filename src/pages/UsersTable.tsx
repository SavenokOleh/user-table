import React, { useEffect, useState } from "react";
import PaginationTable from "../components/PaginationTable";
import getUsers from "../store/actions/getUsers";
import { useAppDispatch } from "../store";
import { Container, FormControl, NativeSelect } from "@mui/material";
import { toast } from "react-toastify";

const UsersTable: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const [isSort, setSort] = useState<string>("none");

  useEffect(() => {
    toast.promise(dispatch(getUsers()), {
      pending: "Trying to get all users data",
      success: "Successfully got all users",
      error: "Something goes wrong with user fetching",
    });
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <FormControl>
        <NativeSelect
          variant="outlined"
          defaultValue="none"
          inputProps={{
            name: "gender-sort",
            id: "uncontrolled-native",
          }}
          onChange={(event) => setSort(event.target.value)}
        >
          <option value={"none"}>none</option>
          <option value={"male"}>male</option>
          <option value={"female"}>female</option>
        </NativeSelect>
      </FormControl>
      <br />
      <PaginationTable sort={isSort} />
    </Container>
  );
};

export default UsersTable;
