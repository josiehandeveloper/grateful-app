import config from "../config";
import TokenService from "./token-service";

const PostAPIService = {
  postPost(post) {
    return fetch(`${config.API_ENDPOINT}/feed`, {
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
    return fetch(`${config.API_ENDPOINT}/feed`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  saveLikes(postId) {
    return fetch(`${config.API_ENDPOINT}/feed`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(postId),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default PostAPIService;
