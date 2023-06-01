import React, { useEffect } from "react";
import { ScrollRestoration, useNavigate, useParams } from "react-router-dom";
import PageContent from "../components/PageContent/PageContent";
import PostsList from "../components/Posts/PostsList";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/reducers/posts";
import { Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

const UserPage = () => {
  const params = useParams();
  const userId = params.userId;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector(
    (state) => state.posts.userPosts[`userId=${userId}`],
  );

  useEffect(() => {
    if (!posts || posts.length === 0 ) dispatch(loadPosts({ userId: userId }));
  }, [posts]);

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
      <PostsList posts={posts} />
    </PageContent>
  );
};

export default UserPage;
