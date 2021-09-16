import { Dispatch } from "redux";
import { Posts } from "../../components/common/interface/Posts";
import * as actionTypes from "../actionTypes";
type Action = {
  type: string;
  payload: Posts[];
};

export const getPosts = (posts: Posts[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: actionTypes.GET_POSTS,
      payload: posts,
    });
  };
};
