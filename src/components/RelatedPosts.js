import { useState, useEffect } from "react";
import 'semantic-ui-css/semantic.min.css'
import API_POSTS from "../services/API_POSTS";
import moment from "moment";
import { Link } from "react-router-dom";

const RelatedPosts = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    },[]
    )

    const getPosts = () => {
        API_POSTS.get("/")
        .then((res) => setPosts(res.data))
        .catch(console.error)
    }


    return(
        <div>
            <div className="ui fluid card">
                <div className="content">
                    <div className="header">
                        Related Posts
                    </div>
                    <div role="listitem" className="ui very relaxed list">
                        {
                            posts.map((post) => {
                                if(post.category === props.category){
                                    const result = post.excerpt
                                    return(
                                        <div className="item">
                                            <img className=" ui avatar image" src={post.featuredImage} />
                                            <div className="content">
                                                <div className="header">
                                                    Posted: {moment(post.dateadded).format('MMMM Do YYYY')}
                                                </div>
                                                <div className="description">
                                                    <Link to={post.slug + '/' + post.id + '/' + post.title}>{result.substring(0, 50)}...</Link>
                                                </div>
                                            </div>
                                            
                                        </div>
                            
                                    )
                                }
                            })
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RelatedPosts;