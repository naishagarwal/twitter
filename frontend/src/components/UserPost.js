import React from "react";

function UserPost({newPost, setNewPost, addPost}) {
    return (
        <div className = "message"> 
            <input
                type = 'text'
                value ={newPost}
                placeholder = 'seize the day!'
                onChange = {(e) => setNewPost(e.target.value)} //automatically captures input when it changes
                className = "messageInput" // for styling purposes
        /> 
        <div className = 'button' onClick = {() => { addPost(); }} >  
            Post 
        </div>
        </div>



    )
}

export default UserPost;