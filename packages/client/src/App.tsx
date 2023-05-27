import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useContext } from "react"
import "semantic-ui-css/semantic.min.css";
import './App.css';

import { UserContextProvider, UserContext } from "./context/userContext";
import { PostContextProvider } from "./context/postContext";

import PrivateRoute from "./components/PrivateRoute"

import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignupPage/SignUpPage'
import HomePage from "./pages/HomePage/HomePage"
import SupportPage from './pages/SupportPage'
import AboutUsPage from './pages/AboutUsPage'
import DevelopersPage from './pages/DevelopersPage'
import TermsPage from './pages/TermsPage'

import ProfilePage from './pages/ProfilePage/ProfilePage';
import SearchPage from './pages/SearchPage/SearchPage';
import { AppContext, AppContextProvider } from "./context/appContext";

// https://stackoverflow.com/questions/47747754/how-to-rewrite-the-protected-private-route-using-typescript-and-react-router-4


function AppRouter() {
  const appContext = useContext(AppContext)
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute children={<HomePage />} />} />
          <Route path="/login" element={
            appContext.loggedIn ? <Navigate replace to="/" /> : <LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/about_us" element={<AboutUsPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/terms" element={<TermsPage />} />

          <Route path="/user_profile" element={<PrivateRoute children={<ProfilePage />} />} />
          <Route path="/search" element={<PrivateRoute children={<SearchPage />} />} />


          <Route path="*" element={appContext.loggedIn ? <Navigate replace to="/" /> : <Navigate replace to="/login" />} />
        </Routes>
      </Router>
    </div>
  )
}

function App() {
  return (
    <AppContextProvider>
          <AppRouter />
    </AppContextProvider>
  )
}

export default App;
