import axios from "axios";
import baseURL from "../../api/index";

export const getAllUsers = (token, page) => {
  return (dispatch) => {
    baseURL
      .get(
        "users",

        {
          params: {
            page,
          },
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        const {
          data: { users },
        } = res;
        const totalPages = res.headers["x-total-length"];
        dispatch({
          type: "FETCH_USERS",
          payload: { users, totalPages },
        });
      });
  };
};

export const addUser = (user, token, history) => (dispatch) => {
  baseURL
    .post(
      "users",
      { ...user },
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    )
    .then((res) => {
      dispatch({
        type: "ADD_USER",
        payload: res.data.users,
      });
      history.replace("/admin/users");
    })
    .catch((err) => console.log(err.message));
};

export const deleteUser = (id, token) => (dispatch) => {
  baseURL
    .delete(`users/${id}`, {
      headers: {
        authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      dispatch({ type: "DELETE_USER", payload: id });
    });
};

export const updateUser =
  ({ first_name, last_name, password, role, username, _id }, token, history) =>
  (dispatch) => {
    baseURL
      .patch(
        `users/${_id}`,
        {
          first_name,
          last_name,
          password,
          role,
          username,
        },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        dispatch({
          type: "UPDATE_USER",
          payload: res.data.data,
        });
        history.replace("/admin/users");
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const getAllCategories = () => (dispatch) => {
  baseURL
    .get(`category`)
    .then((res) => {
      const totalPages = res.headers["x-total-length"];
      const {
        data: { category },
      } = res;
      dispatch({
        type: "GET_CATEGORIES",
        payload: { category, totalPages },
      });
    })
    .catch((err) => console.log(err));
};

export const createCategory = (category, token, history) => (dispatch) => {
  baseURL
    .post(
      "category",
      { ...category },
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    )
    .then((res) => {
      dispatch({
        type: "CREATE_CATEGORY",
        payload: res.data.category,
      });
      history.replace("/admin/category");
    })
    .catch((err) => console.log(err));
};

export const deleteCategory = (id, token) => (dispatch) => {
  baseURL
    .delete(`category/${id}`, {
      headers: {
        authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      dispatch({ type: "DELETE_CATEGORY", payload: id });
    })
    .catch((err) => console.log(err));
};

export const updateCategory =
  ({ category_name, _id }, token, history) =>
  (dispatch) => {
    baseURL
      .patch(
        `category/${_id}`,
        { category_name },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        dispatch({
          type: "UPDATE_CATEGORY",
          payload: res.data.category,
        });
        history.replace("/admin/category");
      })
      .catch((err) => console.log(err));
  };

export const getPublicPosts = (page, type, q) => (dispatch) => {
  // let params = {};
  // if (query?.page) {
  //   params.page = query.page;
  // }
  // if (query?.term) {
  //   params.type = query.term;
  // }
  // if (query?.q) {
  //   params.q = query.q;
  // }
  baseURL
    .get("post/public", {
      params: {
        page,
        type,
        q,
      },
    })
    .then((res) => {
      const totalPages = res.headers["x-total-length"];
      const {
        data: { data },
      } = res;
      dispatch({
        type: "GET_ALL_POSTS",
        payload: { data, totalPages },
      });
    });
};

export const getAllPosts =
  (token, page = 0) =>
  (dispatch) => {
    baseURL
      .get(`post?page=${page}`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        const totalPages = res.headers["x-total-length"];
        const {
          data: { data },
        } = res;
        dispatch({
          type: "GET_ALL_POSTS",
          payload: { data, totalPages },
        });
      });
  };

export const addPost = (data, token, history) => (dispatch) => {
  axios({
    method: "post",
    url: "http://localhost:3002/blog/v1/post",
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: "Bearer " + token,
    },
  })
    .then((res) => {
      dispatch({
        type: "ADD_POST",
        action: res.data.data,
      });
      history.replace("/admin/allposts");
    })
    .catch((err) => console.log(err));
};

export const deletePost = (id, token) => (dispatch) => {
  baseURL
    .delete(`post/${id}`, {
      headers: {
        authorization: "Bearer " + token,
      },
    })
    .then(() => {
      dispatch({
        type: "DELETE_POST",
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const getRecentPosts = () => (dispatch) => {
  baseURL.get("post/recent").then((res) => {
    const {
      data: { data },
    } = res;

    dispatch({
      type: "GET_RECENT_POSTS",
      payload: data,
    });
  });
};

export const login = (creds, history) => (dispatch) => {
  axios
    .post("http://localhost:3002/blog/v1/login", { ...creds })
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: "LOGIN",
          payload: res.data.data,
        });
        history.push("/admin");
      } else {
        throw new Error("Invalid Credentials");
      }
    })
    .catch((err) => alert(err.message));
};
