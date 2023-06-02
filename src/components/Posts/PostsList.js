import React from "react";
import PostItem from "./PostItem";
import { Spinner, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { loadPostsStatus } from "../../store/reducers/posts";

const PostsList = ({ posts }) => {
  const { status, errorMessage, filteredPosts, isSearching } = useSelector(
    (state) => state.posts,
  );
  const postsToShow = isSearching ? filteredPosts : posts;

  return (
    <>
      {status === loadPostsStatus.LOADING && <Spinner className="mx-auto" />}
      {postsToShow && (
        <Stack
          direction="horizontal"
          className="flex-wrap justify-content-center"
          gap={3}
        >
          {postsToShow.map((post) => (
            <PostItem
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))}
        </Stack>
      )}
      {status === loadPostsStatus.ERROR && (
        <h3 className="text-center text-danger">{errorMessage}</h3>
      )}
    </>
  );
};

export default PostsList;
