import React from "react";
import { Accordion } from "react-bootstrap";

const PostComments = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Комментарии</Accordion.Header>
        <Accordion.Body>
        Комментарии
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default PostComments;
