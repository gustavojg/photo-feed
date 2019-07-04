import {
    REQUEST_POSTS,
    RENDER_POSTS,
    LIKE_POST,
    REPOST_POST,
  } from '../actions/posts';
  
  const INITIAL_STATE = {
    postsList: [],
    postLoaded: false,
    searchTerm: '',
  };

const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        postLoaded: false,
        searchTerm: action.searchTerm,
      };
    case RENDER_POSTS:
      return {
        ...state,
        postLoaded: action.postLoaded,
        postsList: action.posts,
      };
    case LIKE_POST:
      console.log(action.postId)
      const posts = state.postsList.map((el) => {
        if(el.id===action.postId && !el.liked){
          el['liked'] = true;
          el['likes_count']++;
        }
        return el;
      });
      console.log(posts)
      return {
        ...state,
        postsList: posts,
      };
    case REPOST_POST:
      return {
        ...state,
      };
    default:
      return state;
  }
}

  export default posts;