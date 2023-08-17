import React from "react"
import axios from 'axios';
import {useState, useEffect} from 'react'
import FeedPost from '../components/FeedPost.js'
import UserPost from '../components/UserPost.js'
import ProfileButton from '../components/ProfileButton.js'
import '../styles/profile.css'

const user = 'Naisha';
const URL = 'http://localhost:8080';

function ProfilePage(){
    const [posts, setPosts] = useState([]);
    async function getPosts() {
        try{
            const response = await axios.get(URL + '/feed');
            setPosts(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    async function deletePost(id){
        axios.delete(URL + '/feed/delete' + id)
        .catch(function(error){
            console.log(error);
        })
    }

    useEffect(() => {
        getPosts();
    }, []);

    return(
        <div className = "App profile"> 
            <div className = "return">
                <ProfileButton />
                <div className = "info">
                    <p> Welcome, {user} </p>
                </div>
            </div>
            
            <p style={{ fontSize: '1.5rem', fontWeight: '700' }}> Your Posts </p>

            {posts
                .map((post) => (
                    <FeedPost
                        key = {post._id}
                        content = {post.content}
                        timestamp = {post.timestamp}
                        deletePost = {deletePost}
                        id = {post._id}
                    />
                        
                )).reverse()
            
            }



        </div>
    )


}

export default ProfilePage;