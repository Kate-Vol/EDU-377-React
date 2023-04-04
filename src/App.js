import React, {useRef, useState} from "react";
import './Styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App () {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Despription'},
        {id: 2, title: 'JavaScript 2', body: 'Despription'},
        {id: 3, title: 'JavaScript 3', body: 'Despription'}
    ])

    const[post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
         e.preventDefault()
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }

  return (
    <div className="App">
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder='Post Name'
            />


            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type='text'
                placeholder='Post description'

            />
            <MyButton onClick={addNewPost}>New post</MyButton>
        </form>
        <PostList posts={posts} title={'Posts list 1'}/>
    </div>
  );
}

export default App;
