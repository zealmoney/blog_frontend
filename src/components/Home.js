import Headers from "./Headers";
import PostCard from "./PostCard";
import RecentPosts from "./RecentPosts";
import Categories from "./Categories";
import Footer from "./Footer";


const Home = () => {
    return(
        <div>
            <Headers />
            <div className='ui grid'>
                <div className='ten wide column'>
                    <PostCard />
                </div> 
                <div className='six wide column'>
                    <RecentPosts />
                <br/>
                    <Categories />
                </div>     
            </div>
            <br/><br/>
            <Footer />
        </div>
    )
};

export default Home;