import { RouterProvider } from "react-router-dom";

import AppRoutes from "./routes";

import { GlobalStyle } from "./styles";

// Saving the api URLs for simplicity
// this is the URL for Users section
export const apiUsers = "https://echo-fake-api.vercel.app/users"
// this is the URL for Posts section
export const apiPosts = "https://echo-fake-api.vercel.app/posts"

// Prop with User infos
export type User = {
  id: number,
  username: string,
  password: string,
  email: string,
  friends: [{
    id: number
    username: string,
  }]
}

// Prop with Friend infos
export type Friend = {
  id: number
  username: string,
}

// Prop with Post infos
export type Post = {
  id: number,
  author: string,
  image?: string,
  content?: string,
  comments: [Comment]
}

// Prop with Comment infos
export type Comment = {
  id: number,
  author: string,
  content: string
}

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <RouterProvider router={AppRoutes} />
    </div>
  );
}

export default App;