import { useParams } from "react-router-dom";
import Headers from "./Headers";
import RecentPosts from "./RecentPosts";
import Categories from "./Categories";
import { useEffect, useState } from "react";
import API_POSTS from "../services/API_POSTS";
import API_COMMENT from "../services/API_COMMENT";
import moment from 'moment';
import Footer from "./Footer";

const PostPage = () => {
    const params = useParams()
    const [posts, setPosts] = useState([])
    const [name, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    const [post, setTitle] = useState(params.title)
    const [msg, setMsg] = useState("")

    const [comments, setComments] = useState([])
    let no_comments = 0;

    useEffect(() => {
        getPost();
        getComments();
    }, []
    );

    const getPost = () => {
        API_POSTS.get("/")
        .then((res) => setPosts(res.data))
        .catch(console.error)
    }

    const addComment = () => {
        
        if(name == '' || email == '' || comment == '' || post == ''){
            setMsg("Please Fill All Fields");
        }else{
            const item = {name, email, comment, post}
            API_COMMENT.post("/", item).then((res) => refreshComments()).catch(console.error)
            setMsg('Comment Posted Successfully');
        }
         
    }

    const refreshComments = () => {
        setUsername("")
        setEmail("")
        setComment("")
        setTitle("")
    }

    const getComments = () => {
        API_COMMENT.get("/")
        .then((res) => setComments(res.data))
        .catch(console.error)
    }
    const getNoComments = () => {
        comments.map((comment) => {
            if(comment.post === params.title){
                no_comments += 1;
            }
            
        })
        return no_comments;
    }

    return(
        <div>
            <Headers />
            <div className="ui grid">
                <div className="ten wide column">
                    {
                        posts.map((post) => {
                            if(post.id == params.post_id){
                                return(
                                    <div key={post.id} className="ui fluid card">
                                            <div className="image">
                                                <img src={post.featuredImage} />
                                            </div>
                                            <div className="content">
                                                <div className="meta">
                                                    <i className="user outline icon"></i>
                                                    <span>Posted by: {post.author}</span>
                                                </div>
                                                <div className="header">
                                                    {post.title}
                                                </div>
                                                <div className="description">
                                                    {post.content}
                                                </div>

                                            </div>
                                    </div>
                                )
                            }
                        }
                        )
                    } 
                    <div className="ui fluid card">
                        <div className="ui inverted segment">
                            <div className="ui inverted form">
                                <div className="equal width fields">
                                    <div className="field">
                                        <label>Username</label>
                                        <input 
                                            type="text" 
                                            value={name}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="User" 
                                            onFocus={() => setMsg("")}
                                        />
                                    </div>
                                    <div className="field">
                                        <label>Email</label>
                                        <div className="ui fluid input">
                                            <input 
                                                type="email" 
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            
                                                placeholder="Email" 
                                                onFocus={() => setMsg("")}
                                            />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="field">
                                    <textarea 
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        onFocus={() => setMsg("")}
                                    >

                                    </textarea>
                                </div>
                                <button onClick={() => addComment()} className="ui button">Post Comment</button>
                                <span>{msg}</span>
                            </div>
                        </div>
                    </div>

                    <div className="ui fluid card">
                        <div className="content">
                            <div className="header">
                                Comments({getNoComments()})
                            </div>
                            <div className="ui divided relaxed list">
                                {
                                    comments.map((commented) => {
                                        if(commented.post === params.title){
                                            return(
                                                <div key={commented.comment} role="listitem" className="list">
                                                    <div className="content">
                                                        <a className="header">
                                                            {commented.name} . {commented.email}
                                                        </a> 
                                                        <div className="meta">
                                                            {commented.comment}
                                                        </div>
                                                        <a className="description">Added: {moment(commented.dateadded).format('MMMM Do YYYY')}</a>                                      
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
                <div className="six wide column">
                    <RecentPosts />
                    <Categories />
                </div>

            </div>
            <Footer />
        </div>
    )
};

export default PostPage;