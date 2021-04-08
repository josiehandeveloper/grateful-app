import React, { Component } from "react";
import { Route } from "react-router-dom";
import Context from "./Context";
import Nav from "./Components/Nav/Nav";
import Homepage from "./Components/Homepage/Homepage";
import Profile from "./Components/Profile/Profile";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Gratitude from "./Components/Gratitude/Gratitude";
import Feed from "./Components/Feed/Feed";
import Footer from "./Components/Footer/Footer";
import PostAPIService from "./services/post-api-service";
import "./App.css";
import TokenService from "./services/token-service";
import config from "./config";

class App extends Component {
  state = {
    newPost: "",
    feed: [],
    posts: [],
    likes: [],
    setNewPost: (e) => this.setState({ newPost: e.target.value }),
    // takes the current user's token and sends it to the BE to get all of their posts
    // then puts them into state/context
    getPosts: () => {
      PostAPIService.getPosts().then((posts) => {
        console.log(posts);
        this.setState({ feed: posts });
      });
    },
    getUserPosts: () => {
      PostAPIService.getUserPosts().then((posts) => this.setState({ posts }));
    },
    getPostLikes: () => {
      PostAPIService.getPostLikes().then((likes) => this.setState({ likes }));
    },

    handleSubmit: (e) => {
      e.preventDefault();
      if (this.state.newPost !== "") {
        const newPost = {
          content: this.state.newPost,
          likes: this.state.like,
        };
        PostAPIService.postPost(newPost).then((data) => {
          newPost.likes = 1;
          // console.log(data);
          this.setState({
            feed: [data, ...this.state.posts],
            newPost: "",
          });
          console.log(data);
        });
      }
    },
    addLike: (post_id, likes, user_id) => {
      const like = likes + 1;
      // const post = this.state.posts.find((p) => p.id === post_id) || {};
      // post.likes ? post.likes++ : (post.likes = 1);
      PostAPIService.postLikes(post_id, like, user_id);
      const f = this.state.posts.map((p) => {
        if (p.id === post_id) {
          console.log(p);
          const update = {
            ...p,
            likes: like,
          };
          return update;
        }
        return p;
      });
      // this.state.getPosts();
      this.setState({
        feed: f,
      });
    },
    deletePost: (postId) => {
      fetch(`${config.API_ENDPOINT}/api/dashboard`, {
        headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
          "Content-Type": "application/json",
        },
        method: "DELETE",
        body: JSON.stringify({ post_id: postId }),
      }).then(() => {
        this.setState({
          posts: this.state.posts.filter((p) => p.id !== postId),
          feed: this.state.posts.filter((p) => p.id !== postId),
        });
      });
    },
  };

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      this.state.getPosts();
      this.state.getUserPosts();
      // this.state.getPostLikes();
    }
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <div className="Nav">
            <Route path="/" component={Nav} />
          </div>
          <main>
            <Route exact path="/" component={Homepage} />
            <Route path="/feed" component={Gratitude} />
            <Route path="/feed" component={Feed} />

            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Profile} />
          </main>
          <div className="Footer">
            <Route path="/" component={Footer} />
          </div>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
