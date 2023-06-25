import React, { Component } from "react";

export default class Cardresult extends Component {
  render() {
    let {login,bio,avatar_url,html_url,created_at,updated_at,followers,following,blog,id,public_repos,location,email,type}=this.props;
    return (
      <div className="container bg-dark  p-5 d-flex">
      <div class="card mb-3 align-item-center" style={{width: "fit-content"}}>
        <div class="row g-0">
          <div class="col">
            <img style={{width:"100rem"}}src={!avatar_url?"https://avatars.githubusercontent.com/u/50200674?v=4":avatar_url} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8" cellSpacing={2}>
            <div class="card-body"key={id}>
              <h5 class="card-title">{!login?"User not found":login}</h5>
              <table>
              <tr><td>Id</td><td>: </td><td><p class="card-text">{!id?"not found":id}</p></td></tr>
              <tr><td>Bio</td><td>:</td><td><p class="card-text">{!bio?"not found":bio}</p></td></tr>
              <tr><td>Type</td><td>:</td><td><p class="card-text">{!type?"not found":type}</p></td></tr>
              <tr><td>Location</td><td> : </td><td><p class="card-text">{!location?"not found":location}</p></td></tr>
              <tr><td>Created At</td><td> : </td><td><p class="card-text">{!created_at?"not found":created_at}</p></td></tr>
              <tr><td>Updated At</td><td> : </td><td><p class="card-text">{!updated_at?"not found":updated_at}</p></td></tr>
              <tr><td>Followers</td><td> : </td><td><p class="card-text">{!followers?"not found":followers}</p></td></tr>
              <tr><td>Following</td><td> : </td><td><p class="card-text">{!following?"0":following}</p></td></tr>
              <tr><td>Blog</td><td>:</td><td><p class="card-text">{!blog?"not found":blog}</p></td></tr>
              <tr><td>Public repository </td><td> : </td><td><p class="card-text">{!public_repos?"not found":public_repos}</p></td></tr>
              <tr><td>Email</td><td>:</td><td><p class="card-text">{!email?"not found":email}</p></td></tr>
              <a href={html_url} class="btn btn-primary btn-sm">View on github</a>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    );
  }
}
