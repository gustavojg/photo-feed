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
        loadingData: action.loadingData,
        page: action.page,
        searchTerm: action.term
      };
    case RENDER_POSTS:
      const d = new Date();
      const postArr = action.posts.map(el => {
        el.key = `${el.id}-${action.page}-${d.getMilliseconds()}`;
        return el;
      });
      const postList =
        action.page === 0 ? postArr : [...state.postsList, ...postArr];
      return {
        ...state,
        loadingData: false,
        postLoaded: action.postLoaded,
        postsList: postList,
        currentPage: action.page,
        searchTerm: action.searchTerm
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
