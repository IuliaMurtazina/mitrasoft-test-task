import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { Stack, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SET_PAGE, loadPostsStatus } from "../../store/reducers/posts";
import { PaginationControl } from "react-bootstrap-pagination-control";

const PostsList = ({ posts }) => {
  const {
    status,
    errorMessage,
    filteredPosts,
    isSearching,
    currentPage,
    objectsPerPage,
  } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const indexOfLastObject = currentPage * objectsPerPage;
  const indexOfFirstObject = indexOfLastObject - objectsPerPage;
  
  const [postsLength, setPostsLength] = useState(0);
  const [postsToShow, setPostsToShow] = useState([]);

  useEffect(() => {
    if (isSearching) {
      setPostsLength(filteredPosts?.length || 0);
      setPostsToShow(
        filteredPosts?.slice(indexOfFirstObject, indexOfLastObject) || [],
      );
    } else {
      setPostsLength(posts?.length || 0);
      setPostsToShow(posts?.slice(indexOfFirstObject, indexOfLastObject) || []);
    }
  }, [
    isSearching,
    filteredPosts,
    posts,
    indexOfFirstObject,
    indexOfLastObject,
  ]);

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
          {postsLength > objectsPerPage && (
            <PaginationControl
              page={currentPage}
              between={4}
              total={postsLength}
              limit={objectsPerPage}
              changePage={(page) => {
                dispatch(SET_PAGE(page));
              }}
              ellipsis={4}
            />
          )}
        </Stack>
      )}
      {status === loadPostsStatus.ERROR && (
        <h3 className="text-center text-danger">{errorMessage}</h3>
      )}
    </>
  );
};

export default PostsList;
