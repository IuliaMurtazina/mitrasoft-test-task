import React from "react";
import PostItem from "./PostItem";
import { Stack } from "react-bootstrap";

const PostsList = ({ posts }) => {
  return (
    <>
      <Stack
        direction="horizontal"
        className="flex-wrap justify-content-center"
        gap={3}
      >
        {posts.map((post) => (
          <PostItem
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
      </Stack>
    </>
  );
};

export default PostsList;
