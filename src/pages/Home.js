import React, { useEffect } from "react";
import PageContent from "../components/Layout/PageContent/PageContent";
import PostsList from "../components/Posts/PostsList";
import { loadPosts } from "../store/reducers/posts";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar/SearchBar";

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
      <SearchBar />
      <PostsList posts={allPosts} />
    </PageContent>
  );
};

export default HomePage;
