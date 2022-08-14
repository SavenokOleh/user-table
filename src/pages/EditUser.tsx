import React, { useEffect } from "react";
import EditForm from "../components/EditForm";
import getUser from "../store/actions/getUser";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../store";
import { toast } from "react-toastify";

const EditUser: React.FunctionComponent = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    id &&
      toast.promise(dispatch(getUser(+id)), {
        pending: "Trying to fetch user data",
        success: "Successfully got this user",
        error: "Something goes wrong with fetching data",
      });
  }, [dispatch, id]);

  return <EditForm />;
};

export default EditUser;
