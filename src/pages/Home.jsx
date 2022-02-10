import React from "react";
import PostList from "../component/PostList";

const Home = (props) => {
  return (
    <div className="Home">
      <h1>Advance JS inlämning 3</h1>
      <PostList posts= {props.postList} />
    </div>
  );
};
export default Home;