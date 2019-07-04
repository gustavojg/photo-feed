export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RENDER_POSTS = 'RENDER_POSTS';
export const LIKE_POST = 'LIKE_POST';
export const REPOST_POST = 'REPOST_POST';

// Actions

export const requestPosts = data => {
    return {
      type: REQUEST_POSTS,
      data,
    };
  };
  
export const postsLoaded = result => {
    return {
      type: RENDER_POSTS,
      postLoaded: true,
      posts: result,
    };
  };

// Actions creators

export function actionRepost(id) {
  return {
    type: REPOST_POST,
    postId: id,
  }
}

export function likePost(id) {
  return {
    type: LIKE_POST,
    postId: id,
  }
}

export function loadPosts(searchTerm) {
    return function(dispatch) {
      dispatch(requestPosts(searchTerm));
      fetch('http://localhost:8000/data')
        .then(response => response.json())
        .then(json => {
          dispatch(postsLoaded(json));
        });
    };
  }