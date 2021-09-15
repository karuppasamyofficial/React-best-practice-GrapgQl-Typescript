import React, { useState } from "react";
import { Posts } from "../components/common/interface/Posts";
import { useQuery, useMutation } from "@apollo/client";
import PostGrid from "../components/posts/PostGrid";
import { GET_POSTS } from "../hooks/posts/GetPosts";

interface PostsType {
  posts: {
    data: Posts[];
  };
}

const Home: React.FC = () => {
  const { data ,error,loading} = useQuery<PostsType>(GET_POSTS, {
    variables: { options: { paginate: { page: 1, limit: 10 } } },
  });

  // const posts:Posts[]=[{

  //     id:"",
  //     title:"kmf",
  //     body:"klk"
  // }]

  if(error)return <p>Error in API </p>
  // if(loading) return <div  id="error-message">Loding Posts.....</div>
  return (
    <div>
      <h1  className="error-message">Loding Posts</h1>
      <p>{data ? JSON.stringify(data.posts.data[0].title) : []}</p>
      <PostGrid posts={data ? data.posts.data : []}></PostGrid>
    </div>
  );
};

export default Home;
