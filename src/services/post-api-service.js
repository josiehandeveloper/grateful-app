import config from "../config";
import TokenService from "./token-service";

const PostAPIService = {
  postPost(post, user_id, likes) {
    return fetch(`${config.API_ENDPOINT}/api/feed`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(post, user_id, likes),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getPosts() {
    return fetch(`${config.API_ENDPOINT}/api/feed`, {
      method: "GET",
      cache: "no-cache",
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
  getPostLikes(post_id) {
    return fetch(`${config.API_ENDPOINT}/api/feed/:post_id/likes`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postLikes(post_id, likes, user_id) {
    fetch(`${config.API_ENDPOINT}/api/feed/${post_id}/likes`, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ post_id, likes, user_id }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default PostAPIService;
