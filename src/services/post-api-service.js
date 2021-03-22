import config from "../config";
import TokenService from "./token-service";

const PostAPIService = {
  postPost(post) {
    return fetch(`${config.API_ENDPOINT}/api/feed`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getPosts() {
    return fetch(`${config.API_ENDPOINT}/api/feed`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getUserPosts() {
    return fetch(`${config.API_ENDPOINT}/api/dashboard`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getLikes(postId) {
    return fetch(`${config.API_ENDPOINT}/api/feed`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postLikes(likeId) {
    return fetch(`${config.API_ENDPOINT}/api/feed`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        like_id: likeId,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  // deletePost(postId) {
  //   return fetch(`${config.API_ENDPOINT}/api/feed`, {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: `Bearer ${TokenService.getAuthToken()}`,
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ post_id: postId }),
  //   }).then(() =>
  //   )
  // },
};

export default PostAPIService;
