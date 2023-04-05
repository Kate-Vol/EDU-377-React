import React, {useEffect, useMemo, useRef, useState} from "react";
import './Styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./components/hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./components/hooks/useFetching";

function App () {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aaaJavaScript', body: 'sssDespription'},
        {id: 2, title: 'bbbJavaScript 2', body: 'dddDespription'},
        {id: 3, title: 'JavaScript 3', body: 'aaaDespription'}
    ])

    const [filter, setFilter] = useState({sort:'', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts= usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts(posts)
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    //Получаем post из дочернего компонента
    const removePost = (post)=>{
        setPosts(posts.filter(p => p.id !== post.id))
    }



  return (
    <div className="App">
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
            Create users
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>

        <hr style={{margin: "15px 0"}}/>
        <PostFilter
            filter ={filter}
            setFilter={setFilter}
        />
        {postError &&
            <h1>It's error ${postError}</h1>
        }
        {isPostsLoading
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Posts list 1'}/>
        }
    </div>
  );
}

export default App;
