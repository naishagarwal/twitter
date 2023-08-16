 import React from "react";
 import {Route, Routes} from "react-router-dom"
 import ProfilePage from "./ProfilePage"
 import FeedPage from "./FeedPage";

 function App(){
    return(
        <div className = "main">
            <Routes>
                <Route index element = {<FeedPage/>}/>
                <Route path = '/feed' element = {<ProfilePage/>}/>
            </Routes>
        </div>
    )
 }

 export default App;