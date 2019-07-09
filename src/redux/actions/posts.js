export const REQUEST_POSTS = "REQUEST_POSTS";
export const RENDER_POSTS = "RENDER_POSTS";
export const LIKE_POST = "LIKE_POST";
export const REPOST_POST = "REPOST_POST";

// Actions

export const requestPosts = (page, term) => {
  return {
    type: REQUEST_POSTS,
    postLoaded: false,
    loadingData: true,
    page,
    term
  };
};

export const postsLoaded = (result, page, term) => {
  return {
    type: RENDER_POSTS,
    postLoaded: true,
    posts: result,
    searchTerm: term,
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

export function loadPosts(page, term) {
  return function(dispatch) {
    dispatch(requestPosts(page, term));
    let searchQuery = "";
    if (term && term.length > 0) {
      searchQuery = `?title_like=${term}`;
    }
    fetch(`http://localhost:8000/data${searchQuery}`)
      .then(response => response.json())
      .then(json => {
        dispatch(postsLoaded(json, page, term));
      });
  };
}
