import { useState, useEffect } from "react";
import 'semantic-ui-css/semantic.min.css';
import API_RECENTPOSTS from "../services/API_RECENTPOSTS";
import { Link } from "react-router-dom";
import moment from "moment";

const RecentPosts = () => {
    const [recentposts, setRecentPosts] = useState([])

    useEffect(() => {
        getRecentPosts();
    }, []

    );
    const getRecentPosts = () => {
        API_RECENTPOSTS.get("/")
        .then((res) => setRecentPosts(res.data))
        .catch(console.error)
    }

    return(
        <div className="ui fluid card">
            <div className="content">
                <div className="header">Recent Posts</div>
                <div role="list" className="ui very relaxed list">
                    {
                        recentposts.map((post) => {
                            const result = post.excerpt
                            return(
                                <div role="listitem" className="item" key={post.title}>
                                    <img src={"https://res.cloudinary.com/dfsyvrhom/" + post.featuredImage} className="ui avatar image" />
                                    <div className="content">
                                        <div className="header">
                                            Posted: {moment(post.dateadded).format('MMMM Do YYYY')}
                                        </div>
                                        <div className="description">
                                            <Link to={post.slug + '/' + post.id + '/' + post.title}>{result.substring(0,52)}...</Link>
                                            
                                        </div>
                                    </div>

                                </div>
                                                
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default RecentPosts;