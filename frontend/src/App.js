
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'

function App() {
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

    // function addLike (){
    //   axios.put(URL + '/feed/like/:_id')
    //   .then(response => {
    //     setNumLikes(response.data.num_likes);
    //   })
    //   .catch(console.error)
    // }


   
  return (
    <div >
      <div> 
        <input
          type = 'text'
          value ={postcontents}
          placeholder = 'message here!'
          onChange = {(e) => setPostContents(e.target.value)}
        /> 

        <button onClick = {() => {addPost()}} > Post </button>

      </div>

      {/* <div> 
        <button onClick = {() => {addLike()}} > Like </button>
      </div> */}
      {posts.map((post, i) =>
        <div key = {i} > 
          <h3> {post.user} </h3>
          <p> {post.content} </p>
          <p> {post.num_likes} {post.timestamp} </p>
        </div>
        
      )}
    </div>
  );
}

export default App;
