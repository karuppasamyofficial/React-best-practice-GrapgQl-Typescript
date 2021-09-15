import { Dispatch } from "redux"
import *  as actionTypes from "../actionTypes"

interface Posts {
    id: number;
    title: string;
    body: string;
  }
  type PostState = {
    posts: Posts[];
  };


  type Action = {
    type: string;
    payload: PostState;
  };
export const getPosts=(posts:PostState)=>{
return(dispatch:Dispatch<Action>)=>{
    dispatch({
        type:actionTypes.GET_POSTS,
        payload:posts
    })
}
   

}

