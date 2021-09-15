import React, { useState,useEffect } from "react";
import { Posts } from "../components/common/interface/Posts";
import { useQuery, useMutation } from "@apollo/client";
import PostGrid from "../components/posts/PostGrid";
import { GET_POSTS } from "../hooks/posts/GetPosts";
import { getPosts} from "../store/action-creator";
import { useSelector, useDispatch } from "react-redux";
import  {bindActionCreators} from "redux"



interface PostsType {
  posts: {
    data: Posts[];
  };
}

const Home: React.FC = () => {
  const { data ,error,loading} = useQuery<PostsType>(GET_POSTS, {
    variables: { options: { paginate: { page: 1, limit: 10 } } },
  });
 const dispatch = useDispatch()
  

  useEffect(() => {
    if(data){
      console.log("logging",data)
      // dispatch(getPosts(data.posts.data))
    }
   
  }, [data])
 
  if(error)return <p>Error in API </p>
  return (
    <div>
      <h1  className="error-message">Loding Posts</h1>
      <p>{data ? JSON.stringify(data.posts.data[0].title) : []}</p>
      <PostGrid posts={data ? data.posts.data : []}></PostGrid>
    </div>
  );
};

export default Home;
