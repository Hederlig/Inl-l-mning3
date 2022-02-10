const Post = (props) => {
  return (
    <div>
      <div className="Post">
        <h2>Title</h2>
        <h3>{props.details.title}</h3>
        <p>{props.details.body}</p>
      </div>

      <div className="Comment">
        {props.commentList.map((Comment, i) => {
          return (
            <div key={i}>
              <h2>Comment</h2>
              <h3>{Comment.body}</h3>
              <h3>Name</h3>
              <p>{Comment.name}</p>
              <h3>E-mail</h3>
              <p>{Comment.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
