import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title = 'Список постов' }) => {

  return (
    <div>
      <h1 style={{ textAlign: 'center'}}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          key={post.id}
          idx={index}
          post={post}
        />
      ))}
    </div>
  )
}

export default PostList;
