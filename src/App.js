import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
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
    // const [posts2, setPosts2] = useState([
    //     {id: 1, title: 'Python', body: 'Despription'},
    //     {id: 2, title: 'Python 2', body: 'Despription'},
    //     {id: 3, title: 'Python 3', body: 'Despription'}
    // ])


    // const [title,setTitle] = useState('')
    // // const bodyInputRef = useRef();
    // const [body, setBody] =useState('')

    //Состояние как объект
    const[post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
         e.preventDefault() //event сброс настроек по умолчанию при нажатии
        // console.log(title)
        // console.log(bodyInputRef.current.value)
        // const newPost = {
        //      id: Date.now(),
        //     title,
        //     body
        // }
        setPosts([...posts, {...post, id: Date.now()}])
        //console.log(newPost)
        // setTitle('')
        // setBody('')
        setPost({title: '', body: ''})
    }

  return (
    <div className="App">
        {/*<Counter/>*/}
        {/*<ClassCounter/>*/}
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                // value = {title}
                value={post.title}
                //onChange = {e => setTitle(e.target.value)}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder='Post Name'
            />


            {/*<input ref={bodyInputRef} type="text"/>*/}
            {/*Неправляемый/неконтролируемый компонент*/}
            <MyInput
                // ref = {bodyInputRef}
                //value = {body}
                value={post.body}
                // onChange = {e => setBody(e.target.value)}
                onChange={e => setPost({...post, body: e.target.value})}
                type='text'
                placeholder='Post description'

            />
            <MyButton onClick={addNewPost}>New post</MyButton>
        </form>
        <PostList posts={posts} title={'Posts list 1'}/>
        {/*<PostList posts={posts2} title={'Posts list 2'}/>*/}
    </div>
  );
}

export default App;
