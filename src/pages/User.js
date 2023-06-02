import React, { useEffect } from "react";
import { ScrollRestoration, useNavigate, useParams } from "react-router-dom";
import PageContent from "../components/PageContent/PageContent";
import PostsList from "../components/Posts/PostsList";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/reducers/posts";
import { Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { loadUser } from "../store/reducers/users";
import UserInfo from "../components/UserInfo/UserInfo";

const UserPage = () => {
  const params = useParams();
  const userId = params.userId;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector(
    (state) => state.posts.userPosts[`userId=${userId}`],
  );
  const currentUser = useSelector(
    (state) => state.users.users[`user-${userId}`],
  );

  useEffect(() => {
    if (!posts || posts.length === 0) dispatch(loadPosts({ userId: userId }));
    dispatch(loadUser(userId));
  }, []);

  console.log(currentUser);

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
