import React, { useEffect } from "react";
import "./Posts.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PostsData } from "../../Data/PostsData";
import Post from "../Post/Post";
import { getTimelinePosts } from "../../actions/postsAction";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  //URLのパスパラメーターを取得。/user/2の2の部分など
  const params = useParams();

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  if (!posts) return "no posts";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);
  return (
    <div className="Posts">
      {loading
        ? "Fetching Posts..."
        : posts.map((post, id) => {
            return <Post data={post} key={id} />;
          })}
    </div>
  );
};

export default Posts;
