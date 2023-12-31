import Headers from "./Headers";
import RecentPosts from "./RecentPosts";
import Categories from "./Categories";
import API_POST_NEWS from "../services/API_POST_NEWS";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import RelatedPosts from "./RelatedPosts";

const News = () => {
    const [postnews, setPostNews] = useState([])

    useEffect(() => {
        getPostNews();
    }, []

    );

    const getPostNews = () => {
        API_POST_NEWS.get("/")
        .then((res) => setPostNews(res.data))
        .catch(console.error)
    }

    return(
        <div>
            <Headers />
            <div className="ui grid">
                <div className="ten wide column">
                {
                    postnews.map((post) => {
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
                        category = "news"
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

export default News;