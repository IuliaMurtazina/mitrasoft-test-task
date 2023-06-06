import React from "react";
import { Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { loadUsersStatus } from "../../store/reducers/users";

const UserInfo = ({ user }) => {
  const { status, errorMessage } = useSelector((state) => state.users);
  
  return (
    <>
      {/* {status === loadUsersStatus.LOADING && <Spinner className="mx-auto"/>} */}
      {user && (
        <Stack direction="horizontal" gap={3} className="mx-auto">
          <img
            src="img/user.png"
            alt="User"
            style={{ width: 80, height: 80 }}
            className="rounded"
          ></img>
          <Stack className="align-self-center">
            <span>{user.name}</span>
            <span>{user.email}</span>
          </Stack>
        </Stack>
      )}
      {status === loadUsersStatus.ERROR && (
        <h3 className="text-center text-danger">{errorMessage}</h3>
      )}
    </>
  );
};

export default UserInfo;
