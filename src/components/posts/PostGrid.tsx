import React, { FC } from "react";
import { Posts } from "../common/interface/Posts";

import PostItem from "./PostItem";

interface PostGridProps {
  posts: Posts[];
}
const PostGrid: FC<PostGridProps> = ({posts}): JSX.Element => {
//   const posts = props;
console.log("posts----",posts,posts);
  return (
    <div className="post-grid">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <PostItem post={post}></PostItem>
          </div>
        );
      })}
    </div>
  );
};

export default PostGrid;
