import { BrowserRouter, Route, Routes } from "react-router-dom";

import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { GlobalStyle } from "./styles";

// Saving the api URLs for simplicity

// this is the URL for 'Users' section
export const apiUsers = {
  Get: "http://127.0.0.1:8000/api/users/get",
  Create: "http://127.0.0.1:8000/api/users/create/",
  Delete: "http://127.0.0.1:8000/api/users/delete/"
}

// this is the URL for 'Posts' section
export const apiPosts = {
  Get: "http://127.0.0.1:8000/api/posts/get",
  Create: "http://127.0.0.1:8000/api/posts/create",
  Delete: "http://127.0.0.1:8000/api/posts/delete"
}

//this is the URL for 'Comment' section
export const apiComments = {
  Get: "http://127.0.0.1:8000/api/comments/get",
  Create: "http://127.0.0.1:8000/api/comments/create",
  Delete: "http://127.0.0.1:8000/api/comments/delete/"
}

// this is the URL for 'Follows' section
export const apiFollows = {
  Get: "http://127.0.0.1:8000/api/follows/get",
  Create: "http://127.0.0.1:8000/api/follows/create",
  Delete: "http://127.0.0.1:8000/api/follows/delete/"
}

// Type of User
export type User = {
  id: number,
  username: string,
  password: string,
  email: string
}

// Type of Follows
export type Follow = {
    id: number
    userId: number
    followingId: number,
}

// Type of Post
export type Post = {
  id: number,
  author: string,
  authorId: number,
  content?: string
}

// Type of Comment
export type Comment = {
  postId: number,
  id: number,
  authorId: number,
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