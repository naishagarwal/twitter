
import './styles/globals.css';
import axios from 'axios';
import {useState, useEffect} from 'react'
import FeedPost from '../components/FeedPost.js'
import UserPost from '../components/UserPost.js'
import './styles/feedpost.css'

function FeedPage() {
    let [posts, setPosts] = useState([]); 
    const [postcontents, setPostContents] = useState('');
    //const [numlikes, setNumLikes] = useState(0);
    const URL = "http://localhost:8080"

    function getFeed () {
        axios.get(URL + "/feed") // this is making a request to the backend
        .then(response => {
          setPosts(response.data); //setting post variable equal to what we get from backend
        })
        .catch(console.error)
    }

    useEffect(() => { // this is ensuring getFeed is only called one time, and only when intially loading.
      getFeed();
    }, [posts]); //calling getFeed whenever posts is changed (aka user adds another post) 

    function addPost (){

      if(postcontents == ''){
        alert('You must enter a message');
        return; //so that no post request is actually made
      }

      axios.post(URL + '/feed/new', {
        content: postcontents,
        user : "testuser",
      })
      .then(response => {
          console.log(response);
      })
      .catch(console.error)
       setPostContents('');

    }

    async function incrementLike (id){
      axios.put(URL + '/feed/like/' + id)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    }
 
  return (
    <div>
      <UserPost newPost = {postcontents} setNewPost = {setPostContents} addPost = {addPost}></UserPost>
      <div> 
        {/* <input
          type = 'text'
          value ={postcontents}
          placeholder = 'message here!'
          onChange = {(e) => setPostContents(e.target.value)}
        /> 

        <button onClick = {() => {addPost()}} > Post </button> */}

      </div>
      {posts.map((post, i) => 
        <div key = {i}>
        <FeedPost
            content = {post.content}
            user = {post.user}
            timestamp = {post.timestamp}
          />
          </div>
      ).reverse() }
    </div>
  );
      }

  export default FeedPage;
