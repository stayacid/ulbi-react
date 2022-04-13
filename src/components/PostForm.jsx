import React, { useState } from "react";
import MainButton from "./UI/buttons/MainButton";
import MainInput from "./UI/inputs/MainInput";

const PostForm = ({ create }) => {
  // const [title, setTitle] = useState(''); // простой стейт для одного инпута
  // const [body, setBody] = useState('');

  // const bodyInputRef = useRef(); // для неуправляемого компонента

  const [post, setPost] = useState({
    title: '',
    body: '',
  })

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);
    setPost({ title: '', body: ''});
  };


  return (
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
  )
}

export default PostForm;
