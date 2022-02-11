import "./styles.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Route, Switch} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
 const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => setPostList(json));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} postList={postList} />}
        />
         
        <Route path="/post/:id" render={(props) => <Details {...props} />} />
      </Switch>
    </div>
  );
}

export default App;