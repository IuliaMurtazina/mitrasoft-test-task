import React from "react";
import { Stack } from "react-bootstrap";

const CommentItem = ({ email, body }) => {
  return (
    <Stack className="bg-light p-3 rounded">
      <b>{email}</b>
      <p>{body}</p>
    </Stack>
  );
};

export default CommentItem;
