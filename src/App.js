import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Routes, Route,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { format } from 'date-fns'

function App() {
  const [posts,setPosts] = useState([
    {
    id: 1,
    title: "My First Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 2,
    title: "My 2nd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 3,
    title: "My 3rd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  }
  ]);
  const [search,setSearch]= useState('');
  const [searchResults,setSearchResults]=useState([]);
  const [postTitle,setPostTitle]=useState('');
  const [postBody,setPostBody]=useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResult = posts.filter(post =>
        ((post.body).toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        || ((post.title).toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    );
    setSearchResults(filteredResult.reverse());
  },[posts,search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id=posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime=format(new Date(), 'MMMM dd,yyyy pp');
    const newPost={id, title:postTitle, datetime, body:postBody};
    const allPosts = [...posts,newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
    // const postList =
  }
  const handleDelete = (id) => {
    const postList=posts.filter(post => post.id !== id);
    setPosts(postList);
    navigate("/");
  }
  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch}/>    
      
      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />
        <Route path="/post" element={
          <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />} />        
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
