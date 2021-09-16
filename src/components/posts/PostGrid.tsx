import React, { FC } from "react";
import { Posts } from "../common/interface/Posts";

import PostItem from "./PostItem";

import { State } from "../../store/reducer";
import { useSelector } from "react-redux";

interface PostGridProps {
  posts: Posts[];
}
const PostGrid: FC<PostGridProps> = ({ posts }): JSX.Element => {
  //comes from redux store
  const postsDeatils = useSelector((state: State) => state.postsDeatils);
  
  // values is coms from parant component
  //  console.log("posts",posts)
  return (
    <div className="post-grid">
      {postsDeatils.posts.map((post) => {
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
