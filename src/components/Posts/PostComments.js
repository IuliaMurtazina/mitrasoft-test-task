import React from "react";
import { Accordion, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadCommentsStatus } from "../../store/reducers/comments";
import { showComments } from "../../store/reducers/ui";

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
        <Accordion.Body>
          {status === loadCommentsStatus.LOADING && !currentComments && (
            <Spinner className="mx-auto" />
          )}
          {currentComments &&
            currentComments.map((comm) => <p key={comm.id}>{comm.id}</p>)}
          {status === loadCommentsStatus.ERROR && <p>{errorMessage}</p>}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default PostComments;
