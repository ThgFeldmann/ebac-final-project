import { BrowserRouter, Route, Routes } from "react-router-dom";

import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { GlobalStyle } from "./styles";

// Saving the api URLs for simplicity
// this is the URL for 'Users' section
export const apiUsers = "https://echo-fake-api.vercel.app/users"
// this is the URL for 'Posts' section
export const apiPosts = "https://echo-fake-api.vercel.app/posts"
// this is the URL for the 'Follows' section
export const apiFollows = "https://echo-fake-api.vercel.app/follows"

// Type of User
export type User = {
  id: number,
  username: string,
  password: string,
  email: string
}

// Type of Follows
export type Follow = {
    caseId: number
    userId: number
    followingId: number,
}

// Type of Post
export type Post = {
  id: number,
  author: string,
  image?: string,
  content?: string,
  comments: Comment[]
}

// Type of Comment
export type Comment = {
  commentId: number,
  author: string,
  content: string
}

// Type of Form values
export type FormValues = {
  email?: string
  username?: string
  password?: string
}

function App() {

  const store = createStore({
    authName: '_auth',
    authType: 'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:'
  })

  return (
    <div className="App">
      <AuthProvider store={store}>
        <BrowserRouter>
        <GlobalStyle/>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;