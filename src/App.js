import React, {useRef, useState} from "react";
import './Styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App () {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aaaJavaScript', body: 'sssDespription'},
        {id: 2, title: 'bbbJavaScript 2', body: 'dddDespription'},
        {id: 3, title: 'JavaScript 3', body: 'aaaDespription'}
    ])

    const[selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    //Получаем post из дочернего компонента
    const removePost = (post)=>{
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: "15px 0"}}/>
        <div>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Sort by"
                options={[
                    {value: 'title', name: 'By name'},
                    {value: 'body', name: 'By description'},
                ]}
            />
        </div>
        {posts.length !==0
                ? <PostList remove={removePost} posts={posts} title={'Posts list 1'}/>
                : <h1 style={{textAlign: 'center'}}>Posts cant find</h1>
        }
    </div>
  );
}

export default App;
