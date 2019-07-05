export const REQUEST_POSTS = "REQUEST_POSTS";
export const RENDER_POSTS = "RENDER_POSTS";
export const LIKE_POST = "LIKE_POST";
export const REPOST_POST = "REPOST_POST";

// Actions

export const requestPosts = page => {
  return {
    type: REQUEST_POSTS,
    postLoaded: false,
    page
  };
};

export const postsLoaded = (result, page) => {
  return {
    type: RENDER_POSTS,
    postLoaded: true,
    posts: result,
    page
  };
};

// Actions creators

export function actionRepost(id) {
  return {
    type: REPOST_POST,
    postId: id
  };
}

export function likePost(id) {
  return {
    type: LIKE_POST,
    postId: id
  };
}

export function loadPosts(page) {
  return function(dispatch) {
    dispatch(requestPosts(page));
    fetch("http://localhost:8000/data")
      .then(response => response.json())
      .then(json => {
        dispatch(postsLoaded(json, page));
      });
  };
}
export function searchPosts(term) {
  return function(dispatch) {
    dispatch(requestPosts(term));
    fetch("http://localhost:8000/data")
      .then(response => response.json())
      .then(json => {
        dispatch(postsLoaded(json));
      });
  };
}
