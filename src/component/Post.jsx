import { useHistory } from "react-router-dom";
const Post = (props) => {
  const history = useHistory();
  return (
    <div>
      <div className="Post">
        <h1>Title:</h1>
        <h2>{props.details.title}</h2>
        <h3>Body:</h3>
        <p>{props.details.body}</p>
      </div>

      <div className="container">
        {props.commentList.map((Comment, i) => {
          return (
            <div className="Comment" key={i}>
              <h2>Comment:</h2>
              <h3>{Comment.body}</h3>
              <h3>Name:</h3>
              <p>{Comment.name}</p>
              <h3>E-mail:</h3>
              <p>{Comment.email}</p>
              <button onClick={history.goBack} className="Button">
        Go back
      </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
