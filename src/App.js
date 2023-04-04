import React, {useRef, useState} from "react";
import './Styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App () {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Despription'},
        {id: 2, title: 'JavaScript 2', body: 'Despription'},
        {id: 3, title: 'JavaScript 3', body: 'Despription'}
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <PostList posts={posts} title={'Posts list 1'}/>
    </div>
  );
}

export default App;
