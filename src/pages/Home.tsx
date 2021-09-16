import React, { useState,useEffect } from "react";
import { Posts } from "../components/common/interface/Posts";
import { useQuery, useMutation } from "@apollo/client";
import PostGrid from "../components/posts/PostGrid";
import { GET_POSTS } from "../hooks/posts/GetPosts";
import { getPosts} from "../store/action-creator";
import {  useDispatch } from "react-redux";
import  {bindActionCreators} from "redux"
import {actionCreators} from "../store"



interface PostsType {
  posts: {
    data: Posts[];
  };
}

interface PostGridProps {
  posts: Posts[];
} 

const Home: React.FC = () => {
  const { data ,error,loading} = useQuery<PostsType>(GET_POSTS, {
    variables: { options: { paginate: { page: 1, limit: 10 } } },
  });
 const dispatch = useDispatch()
  
//  const { getPosts } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    if(data){
 




const post:PostGridProps={
  posts:data.posts.data
}


      getPosts(post.posts)

      //directly we can dispatch
      dispatch(getPosts(post.posts))
    }
   
  }, [data])
  
  
  if(error)return <p>Error in API </p>
  return (
    <div>
      <h1  className="error-message">Loding Posts</h1>
   
      <PostGrid posts={data ? data.posts.data : []}></PostGrid>
    </div>
  );
};

export default Home;
