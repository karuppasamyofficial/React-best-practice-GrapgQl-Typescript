import React, { FC } from "react";
import { Posts } from "../common/interface/Posts";
interface PostItemProps {
  post: Posts;
}

const PostItem: FC<PostItemProps> = (props) => {
  return (
    <div>
      <h1>{props.post.id}</h1>
      <p>{props.post.title}</p>
      <p>{props.post.body}</p>
    </div>
  );
};

export default PostItem;
