import React, {useMemo, useRef, useState} from "react";
import './Styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App () {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aaaJavaScript', body: 'sssDespription'},
        {id: 2, title: 'bbbJavaScript 2', body: 'dddDespription'},
        {id: 3, title: 'JavaScript 3', body: 'aaaDespription'}
    ])

    const[filter, setFilter] = useState({sort:'', query: ''})


    const sortedPosts = useMemo( () => {
        console.log('getSortedPosts is worked')
        if (filter.sort) {
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSeacheredPosts = useMemo( () => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    //Получаем post из дочернего компонента
    const removePost = (post)=>{
        setPosts(posts.filter(p => p.id !== post.id))
    }



  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: "15px 0"}}/>
        <PostFilter
            filter ={filter}
            setFilter={setFilter}
        />
                <PostList remove={removePost} posts={sortedAndSeacheredPosts} title={'Posts list 1'}/>
    </div>
  );
}

export default App;
