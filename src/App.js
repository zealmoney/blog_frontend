import { Route, Routes, BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Home from "./components/Home";
import News from "./components/News";
import NoPage from "./components/NoPage";
import Entertainment from './components/Entertainment';
import Fashion from './components/Fashion';
import Sports from './components/Sports';
import Politics from './components/Politics';
import PostPage from './components/PostPage';


function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="news" element={<News />} />
      <Route path="entertainment" element={<Entertainment />} />
      <Route path="fashion" element={<Fashion />} />
      <Route path="sports" element={<Sports />} />
      <Route path="politics" element={<Politics />} />
      <Route path="news/:post_id/:title" element={<PostPage />} />
      <Route path="entertainment/:post_id/:title" element={<PostPage />} />
      <Route path="fashion/:post_id/:title" element={<PostPage />} />
      <Route path="sports/:post_id/:title" element={<PostPage />} />
      <Route path="politics/:post_id/:title" element={<PostPage />} />

      <Route path="news/:post_id/:title" element={<PostPage />} />

      <Route path="*" element={<NoPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
