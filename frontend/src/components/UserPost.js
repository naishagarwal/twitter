import React from "react";

function UserPost({newPost, setNewPost, addPost}) {
    return (
        <div className = "message"> 
            <input
                type = 'text'
                value ={newPost}
                placeholder = 'message here!'
                onChange = {(e) => setNewPost(e.target.value)}
                className = "messageInput"
        /> 
        <div className = 'button' onClick = {() => { addPost(); }} >
            Post
        </div>
        </div>



    )
}

export default UserPost;