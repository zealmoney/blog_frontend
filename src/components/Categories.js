import { useState, useEffect } from "react";
import 'semantic-ui-css/semantic.min.css';
import API_CATEGORIES from "../services/API_CATEGORIES";
import { Link } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories();
    }, []

    );

    const getCategories = () => {
        API_CATEGORIES.get("/")
        .then((res) => setCategories(res.data))
        .catch(console.error)
    }


    return(
        <div className="ui fluid card">

            <div className="content">
                <div className="header">Categories</div>
                <div className="ui  divided very relaxed list">
                    {
                        categories.map((category) => {
                            return(
                                <div key={category.name} role="listitem" className="item">
                                    <Link to={category.slug} className="header">{category.name}</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

};

export default Categories;