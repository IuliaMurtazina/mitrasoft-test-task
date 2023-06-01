import React from "react";
import { Stack } from "react-bootstrap";
import PostComments from "./PostComments/PostComments";
import { Link } from "react-router-dom";

const PostItem = ({ id, userId, title, body }) => {
  return (
    <>
      <Stack className="bg-light p-2 rounded" gap={3}>
        <Stack direction="horizontal" gap={3} className="align-items-center">
          <Link to={`/user/${userId}`}>
            <img
              src="/img/user.png"
              alt="user"
              style={{ width: 40, height: 40 }}
            />
          </Link>
          <p className="mb-0">{title}</p>
        </Stack>
        <p className="mb-0">{body}</p>
        <PostComments id={id} />
      </Stack>
    </>
  );
};

export default PostItem;
