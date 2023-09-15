import Headers from "./Headers";
import RecentPosts from "./RecentPosts";
import Categories from "./Categories";
import API_POST_SPORTS from "../services/API_POST_SPORTS";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import RelatedPosts from "./RelatedPosts";

const Sports = () => {
    const [postSports, setPostSports] = useState([])

    useEffect(() => {
        getPostSports();
    }, []

    );

    const getPostSports = () => {
        API_POST_SPORTS.get("/")
        .then((res) => setPostSports(res.data))
        .catch(console.error)
    }

    return(
        <div>
            <Headers />
            <div className="ui grid">
                <div className="ten wide column">
                {
                    postSports.map((post) => {
                        return(
                            <div key={post.id} className="ui fluid card">
                                <div className="image">
                                    <img src={"https://res.cloudinary.com/dfsyvrhom/" + post.featuredImage} />
                                </div>
                                <div className="content">
                                    <div className="header">
                                        <Link to={post.id + '/' + post.title}>{post.title}</Link>
                                        
                                    </div>
                                    <div className="meta">
                                        {post.excerpt}
                                    </div>

                                </div>
                                <div className="extra content">
                                    <i className="user outline icon"></i>
                                    <span>posted by: {post.author} </span>

                                </div>
                            </div>
                        )
                    })
                }
                </div>

                <div className="six wide column">
                    <RelatedPosts 
                        category = "sports"
                    />
                    <br/>
                    <Categories />
                </div>

            </div>
            <br/><br/>
            <Footer />
        </div>
    )
}

export default Sports;