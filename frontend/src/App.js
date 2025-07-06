import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/context/ThemeContext.js';
import { AuthProvider } from './components/context/AuthContext.js';
import Navbar from './components/ui/Nabar.jsx';
import Home from './pages/Home';
import Blogs from './pages/Blogs.jsx';
import Profile from './pages/Profile.jsx';
import CreatePost from './pages/CreatePost.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import './styles/globals.css';
import './styles/theme.css';
import Footer from './components/ui/Footer.jsx';
import About from './pages/About.jsx';
import PrivateRoute from './PrivateRoute.js';

function App() {
  return (
    <Router>
        <ThemeProvider>
          <AuthProvider>
             
            {/* <Navbar /> */}
                  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">

              <Routes>
              {/* <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Blogs />} />
                <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} /> */}
                <Route path="/create" element={<CreatePost />} /> 
                <Route path="/signin" element={<SignIn />} />
                <Route path="/" element={<SignUp />} />
                {/* <Route path="/about" element={<About />} /> */}

              </Routes>

              <Footer />
       </div>
        </AuthProvider>
        </ThemeProvider>
    </Router>
  );
}

export default App;