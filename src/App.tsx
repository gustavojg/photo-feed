import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { IClassNameProps } from "@bem-react/core";

import { loadPosts } from "./redux/actions/posts";

import Header from "./Components/Header/Header";
import Post from "./Components/Post/Post";

import logo from "./images/logo.png";
import "./App.scss";

export interface IAppProps extends IClassNameProps {
  store?: any;
  loadInfo?: any;
  posts?: [];
  postLoaded?: boolean;
}

const App: FC<IAppProps> = ({ loadInfo, posts = null, postLoaded }) => {
  useEffect(() => {
    if (!postLoaded) {
      loadInfo();
    }
  });
  return (
    <div className="App">
      <Header className="App-header" logo={logo}></Header>
      <main className="App-main">
        {posts &&
          posts.map(el => {
            return (
              <Post
                id={el["id"]}
                key={el["id"]}
                title={el["title"]}
                likes={el["likes_count"]}
                repost={el["repost_count"]}
                liked={el["liked"]}
                price={el["price"]}
                photo={el["main_attachment"]["big"]}
                author={el["author"]}
              />
            );
          })}
      </main>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  posts: state.posts.postsList,
  postLoaded: state.posts.postLoaded
});

const mapDispatchToProps = (dispatch: any) => ({
  loadInfo: () => dispatch(loadPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
