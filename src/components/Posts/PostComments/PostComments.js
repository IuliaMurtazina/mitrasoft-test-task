import React from "react";
import { Accordion, Spinner, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadCommentsStatus } from "../../../store/reducers/comments";
import { showComments } from "../../../store/reducers/ui";
import CommentItem from "./CommentItem";
import classes from "./PostComments.module.css";

const PostComments = ({ id }) => {
  const dispatch = useDispatch();
  const postId = `postId=${id}`;
  const { comments, status, errorMessage } = useSelector(
    (state) => state.comments,
  );
  const currentComments = comments[postId];

  return (
    <Accordion
      onClick={() => {
        dispatch(showComments(postId));
      }}
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Комментарии</Accordion.Header>
        <Accordion.Body className={classes.list}>
          <Stack gap={2}>
            {status === loadCommentsStatus.LOADING && !currentComments && (
              <Spinner className="mx-auto" />
            )}
            {currentComments &&
              currentComments.map((comm) => (
                <CommentItem
                  key={comm.id}
                  email={comm.email}
                  body={comm.body}
                />
              ))}
            {status === loadCommentsStatus.ERROR && <p>{errorMessage}</p>}
          </Stack>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default PostComments;
