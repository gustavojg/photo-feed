import {
  REQUEST_POSTS,
  RENDER_POSTS,
  LIKE_POST,
  REPOST_POST
} from "../actions/posts";

const INITIAL_STATE = {
  postsList: [],
  postLoaded: false,
  searchTerm: "",
  currentPage: 0,
  loadingData: false
};

const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        postLoaded: action.postLoaded,
        loadingData: true,
        page: action.page
      };
    case RENDER_POSTS:
      const d = new Date();
      const postArr = action.posts.map(el => {
        el.key = `${el.id}-${action.page}-${d.getMilliseconds()}`;
        return el;
      });
      return {
        ...state,
        loadingData: false,
        postLoaded: action.postLoaded,
        postsList: [...state.postsList, ...postArr],
        currentPage: action.page
      };
    case LIKE_POST:
      const posts = state.postsList.map(el => {
        if (el.id === action.postId && !el.liked) {
          el["liked"] = true;
          el["likes_count"]++;
        }
        return el;
      });
      return {
        ...state,
        postsList: posts
      };
    case REPOST_POST:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default posts;
