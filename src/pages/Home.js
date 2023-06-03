import React, { useEffect } from "react";
import PageContent from "../components/Layout/PageContent/PageContent";
import PostsList from "../components/Posts/PostsList";
import {
  CLEAR_FILTERED_POSTS,
  CLEAR_SORTING_POSTS,
  loadPosts,
  loadPostsStatus,
} from "../store/reducers/posts";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar/SearchBar";
import { Spinner } from "react-bootstrap";

const HomePage = () => {
  const dispatch = useDispatch();

  const { allPosts, isSearching, isSorting } = useSelector(
    (state) => state.posts,
  );

  useEffect(() => {
    if (allPosts.length === 0 || isSorting) dispatch(loadPosts());
    if (isSearching) dispatch(CLEAR_FILTERED_POSTS());
  }, []);

  return (
    <PageContent title="Все посты">
      <SearchBar />
      <PostsList posts={allPosts} />
    </PageContent>
  );
};

export default HomePage;
