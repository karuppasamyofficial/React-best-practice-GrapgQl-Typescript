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

const initialState = {
  posts: [],
};

export const PostReducer = (
  state: PostState = initialState,
  action: Action
) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return { ...state, possts: action.payload };
    // case "CREATE_POST":
    //   return { ...state, possts: action.payload };

    default:
      return state;
  }
};
