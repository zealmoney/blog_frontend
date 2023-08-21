import { useState, useEffect } from "react";
import 'semantic-ui-css/semantic.min.css';
import API_CATEGORIES from "../services/API_CATEGORIES";
import { Link } from "react-router-dom";

const Headers = () => {
    const [categories, setCategories]  = useState([])

    useEffect(() => {
        getCategories()
    }, []
    );

    const getCategories = () => {
        API_CATEGORIES.get("/")
        .then((res) => setCategories(res.data))
        .catch(console.error)
    }

    return(
        <div>
            <div className="ui dividing header">
                <div className="ui left floated header">
                    <Link to="/">NewsApp</Link>                    
                </div>
                <div className="ui right aligned header">
                    <div className="ui right aligned header">
                        <ul className="ui horizontal list">
                            <Link className="item" to="/">Home</Link>
                            {
                                categories.map((category) => {
                                    return(
                                        <Link key={category.slug} className="item" to={category.slug}>{category.name}</Link>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
};

export default Headers;