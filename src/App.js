import React, { Component } from "react";
import { Route } from "react-router-dom";
import Context from "./Context";
import Nav from "./Components/Nav/Nav";
import Homepage from "./Components/Homepage/Homepage";
import Profile from "./Components/Profile/Profile";
import Register from "./Components/Register/Register";
import Notification from "./Components/Notifications/Notifications";
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
    likes: "",
    setNewPost: (e) => this.setState({ newPost: e.target.value }),
    // takes the current user's token and sends it to the BE to get all of their posts
    // then puts them into state/context
    getPosts: () => {
      PostAPIService.getPosts().then((posts) => this.setState({ feed: posts }));
    },
    getUserPosts: () => {
      PostAPIService.getUserPosts().then((posts) => this.setState({ posts }));
    },

    handleSubmit: (e) => {
      e.preventDefault();
      if (this.state.newPost !== "") {
        const newPost = {
          content: this.state.newPost,
        };
        PostAPIService.postPost(newPost);
        this.setState({
          posts: [newPost, ...this.state.posts],
          newPost: "",
        });
      }
    },
    addLike: (post_id) => {
      const post = this.state.posts.find((p) => p.id === post_id) || {};
      post.likes ? post.likes++ : (post.likes = 1);
      PostAPIService.postLikes(post.id, post.likes);
      this.setState({
        posts: this.state.posts.map((p) => (p.id === post_id ? post : p)),
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
        });
      });
    },
  };

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      this.state.getPosts();
      this.state.getUserPosts();
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
            <Route path="/notification" component={Notification} />
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
