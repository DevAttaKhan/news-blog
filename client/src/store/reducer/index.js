import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import postReducer from "./postReducer";
import authReducer from "./authReducer";
import recentPosts from "./recentPostsReducer";

const rootReducer = combineReducers({
  users: userReducer,
  category: categoryReducer,
  posts: postReducer,
  auth: authReducer,
  recentPosts,
});

export default rootReducer;
