import React, { useEffect } from "react";
import PageContent from "../components/PageContent/PageContent";
import PostsList from "../components/Posts/PostsList";
import { loadPosts } from "../store/reducers/posts";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  return (
    <PageContent title="Все посты">
      <PostsList />
    </PageContent>
  );
};

export default HomePage;
