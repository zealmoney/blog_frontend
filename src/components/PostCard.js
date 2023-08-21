import { useEffect, useState } from "react";
import API_POSTS from "../services/API_POSTS";
import 'semantic-ui-css/semantic.min.css';
import { Link } from "react-router-dom";

const PostCard = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts();
    }, []

    );

    const getPosts = () => {
        API_POSTS.get("/")
        .then((res) => setPosts(res.data))
        .catch(console.error)
    }

    return(
        <div>
            
                {
                    posts.map((post) => {
                        return(                         
                            <div key={post.id} className="ui fluid card">
                                <div className="image">
                                    <img src={post.featuredImage} alt={post.title} />
                                </div>
                                <div className="content">
                                    <div className="header">
                                        <Link to={post.category + '/' + post.id + '/' + post.title }>{post.title}</Link>
                                        
                                    </div>
                                    <div className="meta">
                                        {post.excerpt}
                                    </div>
                                </div>
                                <div className="extra content">
                                    <i aria-hidden="true" className="user outline icon"></i>
                                    <span>
                                        Posted by: {post.author}
                                    </span>
                                </div>
                            </div>   
                        )
                    }

                    )
                }
                
                
 

            
        </div>
        
    )

};

export default PostCard