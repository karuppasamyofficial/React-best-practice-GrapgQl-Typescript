import { Posts } from "../../components/common/interface/Posts";
import * as actionTypes from "../actionTypes";

interface PostGridProps {
  posts: Posts[];
}

type Action = {
  type: string;
  payload: Posts[];
};

const initialState = {
  posts: [],
};

export const PostReducer = (
  state: PostGridProps = initialState,
  action: Action
) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};
