import React, { useEffect } from "react";
import { Spinner, Stack } from "react-bootstrap";
import PageContent from "../components/PageContent/PageContent";
import PostsList from "../components/Posts/PostsList";
import { defer, useLoaderData } from "react-router-dom";
import store from "../store";
import { loadPosts } from "../store/reducers/posts";
import { END } from "redux-saga";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  return (
    <PageContent title="Все посты">
      {!posts && <Spinner />}
      {posts && <PostsList posts={posts} />}
    </PageContent>
  );
};

export default HomePage;
