import React, { useState, useRef } from "react";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import PostList from "./components/PostList";
import MainButton from "./components/UI/buttons/MainButton";
import MainInput from "./components/UI/inputs/MainInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 0, title: 'JS', body: 'JS is the best' },
    { id: 1, title: 'JS', body: 'JS is the best' },
    { id: 2, title: 'JS', body: 'JS is the best' },
  ]);
  
  // const [title, setTitle] = useState(''); // простой стейт для одного инпута
  // const [body, setBody] = useState('');
  const [post, setPost] = useState({
    title: '',
    body: '',
  })

  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({ title: '', body: ''})
  };

  return (
    <div className="App">
      <form>
        {/* неуправляемый инпут 
        <input ref={bodyInputRef} type="text" /> */}
        
        {/* неуправляемый компонент */}
        {/* <MainInput ref={bodyInputRef} type="text" placeholder="Описание поста" /> */}

        {/* Управляемый компонент */}
        <MainInput
          type="text"
          placeholder="Название поста"
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
        />
        <MainInput
          type="text"
          placeholder="Описание поста"
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
        />
        <MainButton onClick={addNewPost}>Create</MainButton>
      </form>

      <PostList posts={posts} />
    </div>
  );
}

export default App;
