import { useState, useEffect } from "react";
import 'semantic-ui-css/semantic.min.css';
import API_CATEGORIES from "../services/API_CATEGORIES";
import { Link } from "react-router-dom";
import '../AGRESSIVE.otf'

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
                <div className="ui left floated header" style={{fontFamily: 'AGRESSIVE', fontSize: '25px'}}>
                    <Link to="/">BlogApp</Link>                    
                </div>
                
                    <div className="ui right aligned header">
                        <ul className="ui horizontal list" style={{fontFamily: 'Poppins'}}>
                            <Link className="item" to="/">Home</Link>
                            {
                                categories.map((category) => {
                                    const str = category.name
                                    const str2 = str.charAt(0).toUpperCase() + str.slice(1)
                                    return(
                                        <Link key={category.slug} className="item" to={category.slug}>{str2}</Link>
                                    )
                                })
                            }
                        </ul>

                    </div>
            </div>
            <br/>
        </div>
    )
};

export default Headers;