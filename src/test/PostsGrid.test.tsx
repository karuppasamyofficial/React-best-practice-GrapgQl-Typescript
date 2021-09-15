import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import { mount, shallow, configure } from "enzyme";

import { act } from "react-dom/test-utils";
import wait from "wait";
import React from "react";
import { GET_POSTS } from "../hooks/posts/GetPosts";
import Home from "../pages/Home";
import Adapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom";

configure({ adapter: new Adapter() });

const mockPostData = {
  request: {
    query: GET_POSTS,
    variables: { options: { paginate: { page: 1, limit: 10 } } },
  },
  result: {
    data: {
      posts: {
        data: [
          {
            id: "12",
            title: "karuppasamy",
            body: "nkdkjbgkj",
          },
        ],
      },
    },
  },
};

describe("Home component", () => {
  it("render posts", async () => {
    const { getByText, debug, findByText } = render(
      <MockedProvider mocks={[mockPostData]} addTypename={true}>
        <Home />
      </MockedProvider>
    );
    console.log("getByText", debug());
    expect(getByText("Loding Posts")).toBeInTheDocument();

    const productTag = await findByText("karuppasamyf");
    expect(productTag).toBeInTheDocument();
  });
});
