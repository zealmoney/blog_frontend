import Headers from "./Headers";
import RecentPosts from "./RecentPosts";
import Categories from "./Categories";
import API_POST_ENTERTAINMENT from "../services/API_POST_ENTERTAINMENT";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import RelatedPosts from "./RelatedPosts";

const Entertainment = () => {
    const [postEntertaintament, setPostEntertainment] = useState([])

    useEffect(() => {
        getPostEntertainment();
    }, []

    );

    const getPostEntertainment = () => {
        API_POST_ENTERTAINMENT.get("/")
        .then((res) => setPostEntertainment(res.data))
        .catch(console.error)
    }

    return(
        <div>
            <Headers />
            <div className="ui grid">
                <div className="ten wide column">
                {
                    postEntertaintament.map((post) => {
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
                        category = "Entertainment"

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

export default Entertainment;