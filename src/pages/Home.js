import React, { useEffect } from "react";
import PageContent from "../components/PageContent/PageContent";
import PostsList from "../components/Posts/PostsList";
import { loadPosts } from "../store/reducers/posts";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  const { allPosts } = useSelector((state) => state.posts);


  useEffect(() => {
    if (allPosts.length === 0) {
      dispatch(loadPosts());
    }
  }, [allPosts]);

  return (
    <PageContent title="Все посты">
      <PostsList posts={allPosts} />
    </PageContent>
  );
};

export default HomePage;
