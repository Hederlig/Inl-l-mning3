import { Link } from "react-router-dom";

const PostList = (props) => {
  return (
    <div>
      <ul className="PostList">
        {props.posts.map((post) => {
          return (
            <li className="li" key={post.id}>
              <Link
                to={{ pathname: `/post/${post.id}`, post: { ...post } }}
                className="List"
              >
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;