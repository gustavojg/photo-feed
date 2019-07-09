import React, { FC, useState, useLayoutEffect, useEffect, useRef } from "react";
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
  currentPage: number;
  loadingData: boolean;
  searchTerm: string;
}

const App: FC<IAppProps> = ({
  loadInfo,
  posts = null,
  currentPage,
  loadingData,
  searchTerm
}) => {
  const [pageLoaded, setPageLoaded] = useState(false);
  let term = useRef("");
  let loading = useRef("");
  const targetRef: any = React.createRef();

  useEffect(() => {
    term.current = searchTerm;
    loading.current = loadingData.toString();
  }, [loadingData, currentPage, searchTerm, loadInfo, term, loading]);

  const loadElements = (entries: any) => {
    entries.forEach((entry: any) => {
      if (
        entry.isIntersecting &&
        loading.current === "false" &&
        term.current.length === 0
      ) {
        loadInfo(++currentPage, "");
      }
    });
  };

  const observer = new IntersectionObserver(loadElements, {
    root: null,
    rootMargin: "0px 0px 50px 0px",
    threshold: 0
  });

  useLayoutEffect(() => {
    if (!pageLoaded) {
      observer.observe(targetRef.current);
      setPageLoaded(true);
    }
  }, [targetRef, observer, pageLoaded]);

  const renderPosts = () => {
    if (posts) {
      return posts.map((el: any) => {
        return (
          <Post
            id={el["id"]}
            clipPath={el["key"]}
            key={el["key"]}
            title={el["title"]}
            likes={el["likes_count"]}
            repost={el["repost_count"]}
            liked={el["liked"]}
            price={el["price"]}
            photo={el["main_attachment"]["big"]}
            author={el["author"]}
          />
        );
      });
    }
    return <div>No podemos cargar los posts</div>;
  };
  return (
    <div className="App">
      <Header className="App-header" logo={logo}></Header>
      <main className="App-main">{renderPosts()}</main>
      <div className="App-footer" ref={targetRef}>
        Photo feed
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  posts: state.posts.postsList,
  currentPage: state.posts.currentPage,
  loadingData: state.posts.loadingData,
  searchTerm: state.posts.searchTerm
});

const mapDispatchToProps = (dispatch: any) => ({
  loadInfo: (page: number, term: string) => {
    dispatch(loadPosts(page, term));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
