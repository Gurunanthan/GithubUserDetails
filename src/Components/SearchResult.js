import React, { Component } from "react";
import Cardresult from "./Cardresult";

export default class SearchResult extends Component {
  constructor() {
    super();
    this.state = {
      details: [],
      username: "Gurunanthan",
    };
  }

  componentDidMount() {
    this.fetchUserDetails();
  }

  fetchUserDetails = async () => {
    try {
      const url = `https://api.github.com/users/${this.state.username}`;
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({ details: [parsedData] });
      // console.log(data);
      // alert(url);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  usernameHandle = (event) => {
    // const val = event.target.value;
    // this.fetchUserDetails()
    this.setState({ username: event.target.value });
  };
  usernameHandles = () => {
    this.fetchUserDetails();
  };

  render() {
    return (
      <div className="container mt-5 p-5 border border-light rounded">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={this.usernameHandle}
          />
          <button
            className="btn btn-primary"
            type="button"
            id="button-addon2"
            onClick={this.usernameHandles}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        <div>
          {this.state.details.map((element) => (
            <Cardresult
              key={element.id}
              login={element.login}
              bio={element.bio}
              avatar_url={element.avatar_url}
              html_url={element.html_url}
              created_at={element.created_at}
              updated_at={element.updated_at}
              followers={element.followers}
              following={element.following}
              blog={element.blog}
              id={element.id}
              public_repos={element.public_repos}
              location={element.location}
              email={element.email}
              type={element.type}
            />
          ))}
        </div>
      </div>
    );
  }
}
