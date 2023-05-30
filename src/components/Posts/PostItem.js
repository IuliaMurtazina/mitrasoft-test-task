import React from "react";
import { Stack, Accordion } from "react-bootstrap";
import PostComments from "./PostComments";

const PostItem = ({ id, userId, title, body }) => {
  return (
    <>
      <Stack className="bg-light p-2 rounded" gap={3}>
        <Stack direction="horizontal" gap={3} className="align-items-center">
          <img
            src="./img/user.png"
            alt="user"
            style={{ width: 40, height: 40 }}
          />
          <p className="mb-0">{title}</p>
        </Stack>
        <p className="mb-0">{body}</p>
        <PostComments />
      </Stack>
    </>
  );
};

export default PostItem;
