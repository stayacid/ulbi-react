import React, { useState } from "react";
import PostForm from "./components/PostForm";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 0, title: 'JS', body: 'JS is the best' },
    { id: 1, title: 'JS', body: 'JS is the best' },
    { id: 2, title: 'JS', body: 'JS is the best' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">

      <PostForm create={createPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
