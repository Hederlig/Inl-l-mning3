
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../component/Post";

const Details = (props) => {
  const [data, setData] = useState();
  const [commentList, setCommentList] = useState();
  const { id } = useParams();

   useEffect(() => {
         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) => setData(json));
          
  }, []);
  

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((json) => setCommentList(json));
        }, []);
        
        // console.log(commentList)
  return (
    
   
    <div>
      {data && commentList ? <Post details={data} commentList={commentList} /> : null}
       
    </div>
  );
  
};

export default Details;