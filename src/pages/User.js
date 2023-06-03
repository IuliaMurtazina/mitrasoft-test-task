import React, { useEffect } from "react";
import { ScrollRestoration, useNavigate, useParams } from "react-router-dom";
import PageContent from "../components/Layout/PageContent/PageContent";
import PostsList from "../components/Posts/PostsList";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_FILTERED_POSTS, loadPosts } from "../store/reducers/posts";
import { Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { loadUser } from "../store/reducers/users";
import UserInfo from "../components/UserInfo/UserInfo";

const UserPage = () => {
  const params = useParams();
  const userId = params.userId;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSearching, isSorting, userPosts } = useSelector(
    (state) => state.posts,
  );
  const posts = userPosts[`userId=${userId}`];

  const currentUser = useSelector(
    (state) => state.users.users[`user-${userId}`],
  );

  useEffect(() => {
    if (!posts || posts.length === 0 || isSorting) {
      dispatch(loadPosts({ userId: userId }));
    }
    if (!currentUser) dispatch(loadUser(userId));
    if (isSearching) dispatch(CLEAR_FILTERED_POSTS());
  }, []);

  return (
    <PageContent title={`Пользователь №${userId}`}>
      <ScrollRestoration />
      <Button
        className="btn-secondary align-self-start"
        onClick={() => {
          navigate("..");
        }}
      >
        <ArrowLeft /> Назад
      </Button>
      <UserInfo user={currentUser} />
      <PostsList posts={posts} />
    </PageContent>
  );
};

export default UserPage;
