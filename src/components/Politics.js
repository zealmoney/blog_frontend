import Headers from "./Headers";
import RecentPosts from "./RecentPosts";
import Categories from "./Categories";
import API_POST_POLITICS from "../services/API_POST_POLITICS";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import RelatedPosts from "./RelatedPosts";

const Politics = () => {
    const [postPolitics, setPostPolitics] = useState([])

    useEffect(() => {
        getPostPolitics();
    }, []

    );

    const getPostPolitics = () => {
        API_POST_POLITICS.get("/")
        .then((res) => setPostPolitics(res.data))
        .catch(console.error)
    }

    return(
        <div>
            <Headers />
            <div className="ui grid">
                <div className="ten wide column">
                {
                    postPolitics.map((post) => {
                        return(
                            <div key={post.id} className="ui fluid card">
                                <div className="image">
                                    <img src={post.featuredImage} />
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
                        category = "Politics"
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

export default Politics;